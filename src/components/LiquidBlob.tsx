import React, { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}

  float snoise(vec3 v){
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;

    i = mod(i, 289.0 );
    vec4 p = permute( permute( permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    float n_ = 1.0/7.0;
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                  dot(p2,x2), dot(p3,x3) ) );
  }

  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    vUv = uv;
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    // Base organic noise for flowing liquid effect
    float elevation = snoise(vec3(modelPosition.x * 0.15, modelPosition.y * 0.15, uTime * 0.1)) * 1.5;
    elevation += snoise(vec3(modelPosition.x * 0.4 - uTime * 0.05, modelPosition.y * 0.4 + uTime * 0.05, uTime * 0.15)) * 0.5;
    
    // Mouse interaction (repel/ripple effect)
    vec2 mappedMouse = uMouse * 0.5 + 0.5;
    float mouseDist = distance(vUv, mappedMouse);
    float mouseInfluence = smoothstep(0.4, 0.0, mouseDist) * 2.0;
    
    // Ripple effect around mouse
    float ripple = sin(mouseDist * 15.0 - uTime * 8.0) * mouseInfluence * 0.3;
    
    elevation += ripple - mouseInfluence;

    modelPosition.z += elevation;
    vElevation = elevation;

    gl_Position = projectionMatrix * viewMatrix * modelPosition;
  }
`;

const fragmentShader = `
  uniform float uTime;
  varying vec2 vUv;
  varying float vElevation;

  void main() {
    // Pastel gradient colors
    vec3 color1 = vec3(0.96, 0.75, 0.85); // Pastel Pink
    vec3 color2 = vec3(0.75, 0.85, 0.98); // Pastel Blue
    vec3 color3 = vec3(0.85, 0.75, 0.95); // Pastel Purple
    vec3 color4 = vec3(0.65, 0.90, 0.85); // Pastel Mint
    
    // Mix colors based on UV and elevation
    float mix1 = smoothstep(-1.5, 1.5, vElevation);
    float mix2 = smoothstep(0.0, 1.0, vUv.y + vElevation * 0.1);
    float mix3 = smoothstep(0.0, 1.0, vUv.x - vElevation * 0.1);
    
    vec3 color = mix(color1, color2, mix1);
    color = mix(color, color3, mix2);
    color = mix(color, color4, mix3 * mix1);
    
    // Add subtle lighting/shading based on elevation for 3D depth
    float shade = smoothstep(-2.0, 2.0, vElevation) * 0.25 + 0.8;
    color *= shade;

    gl_FragColor = vec4(color, 1.0);
  }
`;

export default function LiquidBlob() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const { viewport } = useThree();

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0, 0) },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime;
      // Smoothly interpolate mouse position
      materialRef.current.uniforms.uMouse.value.lerp(state.pointer, 0.08);
    }
  });

  return (
    // Scale slightly larger than viewport to hide edges when displaced
    <mesh ref={meshRef} scale={[viewport.width * 1.2, viewport.height * 1.2, 1]}>
      <planeGeometry args={[1, 1, 256, 256]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  );
}
