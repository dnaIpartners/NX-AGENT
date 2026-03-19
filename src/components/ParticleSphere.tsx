import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

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

export default function ParticleSphere() {
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
