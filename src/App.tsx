import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, Network, Users, ShieldCheck } from 'lucide-react';

const vertexShader = `
  uniform float uTime;
  attribute float aShapeType;
  varying float vShapeType;
  varying float vAlpha;
  
  void main() {
    vShapeType = aShapeType;
    
    vec3 pos = position;
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    
    // Calculate facing ratio for depth fading
    vec3 normal = normalize(pos);
    vec3 normalView = normalize(normalMatrix * normal);
    float facing = dot(normalView, vec3(0.0, 0.0, 1.0));
    
    // Front particles are opaque, back particles fade out
    vAlpha = smoothstep(-0.5, 0.5, facing) * 0.8 + 0.1;
    
    // Size attenuation - make them large enough to see the shapes clearly
    // Adjusted size slightly to make the text characters legible
    gl_PointSize = 12.0 * (10.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  uniform float uOpacity;
  uniform sampler2D uTexture;
  varying float vShapeType;
  varying float vAlpha;
  
  void main() {
    vec2 uv = gl_PointCoord;
    
    // vShapeType is 0 to 11 for "IPARTNERS NX"
    float charIndex = floor(mod(vShapeType + 0.5, 12.0));
    
    // Map UV to the texture atlas
    // gl_PointCoord.y goes from 0 (top) to 1 (bottom)
    // CanvasTexture with flipY=true has 0 at bottom, 1 at top.
    vec2 atlasUv = vec2((uv.x + charIndex) / 12.0, 1.0 - uv.y);
    
    vec4 texColor = texture2D(uTexture, atlasUv);
    float alpha = texColor.a;
    
    if (alpha < 0.1) discard;
    
    gl_FragColor = vec4(uColor, alpha * uOpacity * vAlpha);
  }
`;

function ParticleSphere() {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { size } = useThree();
  
  // Create a texture atlas for the characters "IPARTNERS NX"
  const textTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    const chars = "IPARTNERS NX";
    const numChars = chars.length;
    const size = 74;
    canvas.width = size * numChars;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 24px monospace';
      for (let i = 0; i < numChars; i++) {
        ctx.fillText(chars[i], i * size + size / 2, size / 2 + 2);
      }
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
  }, []);

  const { positions, shapeTypes } = useMemo(() => {
    const pos = [];
    const types = [];
    const r = 1.5; // Base radius

    // 1. Scattered Sphere (Background particles)
    // Reduced number of points to increase spacing between elements
    const numPoints = 800;
    for (let i = 0; i < numPoints; i++) {
      const phi = Math.acos(-1 + (2 * i) / numPoints);
      const theta = Math.sqrt(numPoints * Math.PI) * phi;
      
      pos.push(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );
      types.push(i % 12); // Sequentially spell IPARTNERS NX
    }

    // 2. Ring Systems (The distinct circular patterns)
    const addRingSystem = (euler: THREE.Euler, numRings: number, ringSpacing: number, pointsPerRingBase: number) => {
      let charOffset = 0;
      for (let i = 1; i <= numRings; i++) {
        const ringR = i * ringSpacing;
        if (ringR >= r) continue;
        const z = Math.sqrt(r * r - ringR * ringR);
        const count = Math.floor(pointsPerRingBase * i);
        
        for (let j = 0; j < count; j++) {
          const theta = (j / count) * Math.PI * 2;
          const x = ringR * Math.cos(theta);
          const y = ringR * Math.sin(theta);
          
          const vec = new THREE.Vector3(x, y, z);
          vec.applyEuler(euler);
          
          pos.push(vec.x, vec.y, vec.z);
          types.push((charOffset + j) % 12); // Sequentially spell along the ring
        }
        charOffset += count;
      }
    };

    // Large crater (left side) - increased spacing, reduced density
    addRingSystem(new THREE.Euler(Math.PI / 6, -Math.PI / 4, 0), 8, 0.16, 11);
    
    // Small crater (right side) - increased spacing, reduced density
    addRingSystem(new THREE.Euler(-Math.PI / 8, Math.PI / 3, 0), 5, 0.14, 8);

    // Another subtle ring system - increased spacing, reduced density
    addRingSystem(new THREE.Euler(Math.PI / 3, Math.PI / 6, 0), 6, 0.20, 10);

    return {
      positions: new Float32Array(pos),
      shapeTypes: new Float32Array(types)
    };
  }, []);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uColor: { value: new THREE.Color('#b5b5b5') }, // Light gray matching the reference image
    uOpacity: { value: 1.0 },
    uTexture: { value: textTexture }
  }), [textTexture]);

  // Adjusted scale: decreased by 15% from previous
  const baseScale = size.width < 868 ? 1.84 : 2.65;

  useFrame((state) => {
    if (!pointsRef.current || !materialRef.current) return;
    
    const elapsedTime = state.clock.getElapsedTime();
    
    // Initial scale animation
    const animationDuration = 3.0;
    const progress = Math.min(elapsedTime / animationDuration, 1.0);
    const easeProgress = 1 - Math.pow(1 - progress, 4);
    const currentScale = 0.01 + (baseScale - 0.01) * easeProgress;
    pointsRef.current.scale.set(currentScale, currentScale, currentScale);

    materialRef.current.uniforms.uTime.value = elapsedTime;

    // Slow, elegant rotation
    pointsRef.current.rotation.x = elapsedTime * 0.03;
    pointsRef.current.rotation.y = elapsedTime * 0.05;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-aShapeType"
            count={shapeTypes.length}
            array={shapeTypes}
            itemSize={1}
          />
        </bufferGeometry>
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent={true}
          depthWrite={false}
          blending={THREE.NormalBlending}
        />
      </points>
    </Float>
  );
}

const WORDS = ["scale", "elevate", "integrate", "systemize"];

export default function App() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % WORDS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#111] relative overflow-hidden font-sans selection:bg-black selection:text-white">
      {/* Background Grid - Very faint and large */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:120px_120px]"></div>
      
      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6 max-w-[1100px] mx-auto">
        <div className="flex items-center gap-1">
          <span className="text-xl font-medium tracking-tight">IPARTNERS NX</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-[13px] text-gray-500 font-medium">
          <a href="#" className="hover:text-black transition-colors">RECIPE</a>
          <a href="#" className="hover:text-black transition-colors">How it works</a>
          <a href="#" className="hover:text-black transition-colors">INSIGHTS NEWS</a>
          <a href="#" className="hover:text-black transition-colors">KNOWLEDGE</a>
          <a href="#" className="hover:text-black transition-colors">ABOUTS</a>
        </div>
        
        <div className="flex items-center gap-6 text-[13px] font-medium">   
          <button className="bg-black text-white px-5 py-2.5 rounded-full hover:bg-gray-800 transition-colors">
           IPARTNES CO.
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-[1100px] mx-auto px-8 pt-24 pb-32 flex flex-col lg:flex-row items-center min-h-[calc(100vh-88px)]">
        
        {/* Left Column - Text Content */}
        <div className="w-full lg:w-[65%] pr-0 lg:pr-12 z-20 mt-10 lg:mt-0">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-gray-300"></div>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-[0.15em]">The platform for modern teams</span>
          </div>
          
          <h1 className="text-[5rem] sm:text-[6rem] lg:text-[6.5rem] font-medium leading-[0.92] tracking-[-0.04em] mb-8 text-[#0a0a0a]">
            NX AGENT<br />
            to <span className="relative inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={wordIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative inline-block"
                >
                  {WORDS[wordIndex]}
                  {/* Thick underline effect behind text */}
                  <div className="absolute bottom-[10%] left-0 w-full h-[14px] bg-[#e5e5e5] -z-10"></div>
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          
          <p className="text-lg lg:text-[21px] text-gray-500 leading-[1.6] mb-12 max-w-[500px] font-normal">
            IPARNERS, our NX AGENT breaks the linear boundaries of planning, design, and development to perfectly integrate the intelligent workflow
. Fragmented individual know-how is no longer lost; it is permanently systemized into our organizational intelligence through the Platform
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-black text-white px-7 py-3.5 rounded-full text-[15px] font-medium flex items-center gap-3 hover:bg-gray-800 transition-colors group">
              Start free trial
              <span className="text-lg leading-none group-hover:translate-x-1 transition-transform">&rarr;</span>
            </button>
            <button className="bg-white border border-gray-200 text-black px-7 py-3.5 rounded-full text-[15px] font-medium hover:bg-gray-50 transition-colors">
              Watch demo
            </button>
          </div>
        </div>

        {/* Right Column - 3D Sphere */}
        <div className="w-full lg:w-[65%] h-[500px] lg:h-[700px] absolute right-[-15%] lg:right-[-5%] top-1/2 -translate-y-1/2 z-0 opacity-80 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="w-full h-full"
          >
            <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
              <ambientLight intensity={1} />
              <ParticleSphere />
            </Canvas>
          </motion.div>
        </div>
        
      </main>

      {/* Capabilities Section */}
      <section className="relative z-10 max-w-[1100px] mx-auto px-8 py-32 border-t border-gray-100">
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-6 h-[1px] bg-gray-300"></div>
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.15em]">Capabilities</span>
          </div>
          <h2 className="text-[3rem] sm:text-[4rem] font-medium leading-[1.05] tracking-[-0.03em] text-[#0a0a0a]">
            Everything you need.<br />
            <span className="text-gray-400">Nothing you don't.</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {/* Item 01 */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-16 border-b border-gray-100 group">
            <div className="flex gap-8 md:gap-16 w-full md:w-2/3">
              <span className="text-xs font-mono text-gray-400 mt-2">01</span>
              <div>
                <h3 className="text-[1.75rem] font-medium tracking-tight text-[#0a0a0a] mb-3">Instant Deployment</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed max-w-[400px]">
                  Push to production in seconds. Our edge network ensures your applications load instantly, anywhere in the world.
                </p>
              </div>
            </div>
            <div className="mt-8 md:mt-0 w-full md:w-1/3 flex justify-end">
              <div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Layers className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Item 02 */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-16 border-b border-gray-100 group">
            <div className="flex gap-8 md:gap-16 w-full md:w-2/3">
              <span className="text-xs font-mono text-gray-400 mt-2">02</span>
              <div>
                <h3 className="text-[1.75rem] font-medium tracking-tight text-[#0a0a0a] mb-3">AI-Native Workflows</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed max-w-[400px]">
                  Build intelligent applications with built-in AI capabilities. From inference to training, everything scales automatically.
                </p>
              </div>
            </div>
            <div className="mt-8 md:mt-0 w-full md:w-1/3 flex justify-end">
              <div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Network className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Item 03 */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-16 border-b border-gray-100 group">
            <div className="flex gap-8 md:gap-16 w-full md:w-2/3">
              <span className="text-xs font-mono text-gray-400 mt-2">03</span>
              <div>
                <h3 className="text-[1.75rem] font-medium tracking-tight text-[#0a0a0a] mb-3">Real-time Collaboration</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed max-w-[400px]">
                  Work together seamlessly. Live preview, instant feedback, and version control that actually makes sense.
                </p>
              </div>
            </div>
            <div className="mt-8 md:mt-0 w-full md:w-1/3 flex justify-end">
              <div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <Users className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
              </div>
            </div>
          </div>

          {/* Item 04 */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-16 border-b border-gray-100 group">
            <div className="flex gap-8 md:gap-16 w-full md:w-2/3">
              <span className="text-xs font-mono text-gray-400 mt-2">04</span>
              <div>
                <h3 className="text-[1.75rem] font-medium tracking-tight text-[#0a0a0a] mb-3">Enterprise Security</h3>
                <p className="text-[15px] text-gray-500 leading-relaxed max-w-[400px]">
                  Bank-grade encryption, SOC 2 compliance, and granular access controls. Your data stays yours.
                </p>
              </div>
            </div>
            <div className="mt-8 md:mt-0 w-full md:w-1/3 flex justify-end">
              <div className="w-24 h-24 rounded-2xl bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <ShieldCheck className="w-8 h-8 text-gray-400" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
