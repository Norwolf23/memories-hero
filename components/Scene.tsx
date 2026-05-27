"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/* ─────────────────────────────────────────────────────────────
   The Single Sitting — a candlelit dining-room atmosphere.
   No literal table mesh. Pure light, dust, and depth haze —
   the *feeling* of being inside the room before you arrive.
   ───────────────────────────────────────────────────────────── */

type CandleSpec = {
  position: [number, number, number];
  size: number;
  basePhase: number;
  hue: number; // 0 = deep amber, 1 = pale gold
};

const CANDLES: CandleSpec[] = [
  { position: [-2.6, -0.55, -1.2], size: 1.6, basePhase: 0.0, hue: 0.15 },
  { position: [-1.05, -0.4, -0.2], size: 1.9, basePhase: 1.7, hue: 0.45 },
  { position: [0.45, -0.35, -1.6], size: 1.4, basePhase: 3.1, hue: 0.25 },
  { position: [1.9, -0.5, -0.6], size: 1.7, basePhase: 4.4, hue: 0.55 },
  { position: [3.1, -0.6, -2.4], size: 1.2, basePhase: 5.9, hue: 0.1 },
  { position: [-3.6, -0.7, -3.0], size: 1.0, basePhase: 7.4, hue: 0.0 },
  { position: [0.0, 0.9, -3.6], size: 1.3, basePhase: 2.3, hue: 0.35 },
];

/* Procedural flame-glow shader — radial halo + hot core, additive. */
const flameShader = {
  uniforms: {
    uIntensity: { value: 1.0 },
    uColor: { value: new THREE.Color("#B4742E") },
    uCoreColor: { value: new THREE.Color("#F4ECDF") },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    varying vec2 vUv;
    uniform float uIntensity;
    uniform vec3 uColor;
    uniform vec3 uCoreColor;
    void main() {
      vec2 p = vUv - 0.5;
      float d = length(p) * 2.0;
      float halo = smoothstep(1.0, 0.0, d);
      halo = pow(halo, 2.4);
      float core = smoothstep(0.32, 0.0, d);
      core = pow(core, 2.8);
      vec3 col = mix(uColor, uCoreColor, core);
      float alpha = halo * uIntensity;
      gl_FragColor = vec4(col * alpha, alpha);
    }
  `,
};

function Candle({ spec }: { spec: CandleSpec }) {
  const ref = useRef<THREE.Mesh>(null!);
  const matRef = useRef<THREE.ShaderMaterial>(null!);
  const { camera } = useThree();

  const baseColor = useMemo(() => {
    // Blend deep amber → pale gold per spec.hue
    const a = new THREE.Color("#7A3D14");
    const b = new THREE.Color("#D7A968");
    return a.clone().lerp(b, spec.hue);
  }, [spec.hue]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    // Twin-frequency flicker — slow, breathing rather than jittering
    const f1 = Math.sin(t * 1.8 + spec.basePhase) * 0.6;
    const f2 = Math.sin(t * 3.1 + spec.basePhase * 2.0) * 0.4;
    const flicker = 0.86 + (f1 + f2) * 0.09;
    if (matRef.current) {
      matRef.current.uniforms.uIntensity.value = flicker;
      matRef.current.uniforms.uColor.value = baseColor;
    }
    // Billboard toward camera
    if (ref.current) {
      ref.current.quaternion.copy(camera.quaternion);
    }
  });

  return (
    <mesh ref={ref} position={spec.position}>
      <planeGeometry args={[spec.size, spec.size]} />
      <shaderMaterial
        ref={matRef}
        args={[flameShader]}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}

/* Drifting dust motes — backlit, slow upward float. */
function Dust({ count = 480 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 2] = -Math.random() * 5 - 0.5;
      speeds[i] = 0.05 + Math.random() * 0.12;
    }
    return { positions, speeds };
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const arr = ref.current.geometry.attributes.position
      .array as Float32Array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += speeds[i] * delta * 0.25;
      arr[i * 3] += Math.sin(t * 0.4 + i) * 0.0008;
      if (arr[i * 3 + 1] > 3) arr[i * 3 + 1] = -3;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color={"#D7A968"}
        sizeAttenuation
        transparent
        opacity={0.7}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/* Deep haze — large soft amber pools far behind, very slowly drifting. */
function Haze() {
  const a = useRef<THREE.Mesh>(null!);
  const b = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (a.current) {
      a.current.position.x = -1.5 + Math.sin(t * 0.07) * 0.4;
      a.current.position.y = -0.2 + Math.cos(t * 0.05) * 0.2;
    }
    if (b.current) {
      b.current.position.x = 1.8 + Math.cos(t * 0.06) * 0.5;
      b.current.position.y = 0.1 + Math.sin(t * 0.04) * 0.2;
    }
  });

  return (
    <>
      <mesh ref={a} position={[-1.5, -0.2, -5]}>
        <planeGeometry args={[10, 6]} />
        <shaderMaterial
          args={[flameShader]}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          uniforms={{
            uIntensity: { value: 0.22 },
            uColor: { value: new THREE.Color("#3A1F0A") },
            uCoreColor: { value: new THREE.Color("#B4742E") },
          }}
        />
      </mesh>
      <mesh ref={b} position={[1.8, 0.1, -5.5]}>
        <planeGeometry args={[9, 6]} />
        <shaderMaterial
          args={[flameShader]}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          uniforms={{
            uIntensity: { value: 0.18 },
            uColor: { value: new THREE.Color("#2A1505") },
            uCoreColor: { value: new THREE.Color("#D7A968") },
          }}
        />
      </mesh>
    </>
  );
}

/* Cursor parallax + gentle camera breathing. */
function CameraRig() {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 4));
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const reduced = prefersReducedMotion.current;
    const parallaxX = reduced ? 0 : pointer.x * 0.45;
    const parallaxY = reduced ? 0 : pointer.y * 0.28;
    const breatheX = reduced ? 0 : Math.sin(t * 0.08) * 0.06;
    const breatheY = reduced ? 0 : Math.cos(t * 0.11) * 0.04;

    target.current.set(parallaxX + breatheX, parallaxY + breatheY, 4);
    camera.position.x += (target.current.x - camera.position.x) * 0.04;
    camera.position.y += (target.current.y - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function Scene() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0, 4], fov: 48 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <Haze />
      {CANDLES.map((c, i) => (
        <Candle key={i} spec={c} />
      ))}
      <Dust />
      <CameraRig />
    </Canvas>
  );
}
