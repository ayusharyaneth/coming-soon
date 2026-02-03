"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import { useState, useRef, useMemo } from "react";
import * as THREE from "three";

function ParticleLayer({ count, size, color, speed, opacity, mouseRef }: {
    count: number;
    size: number;
    color: string;
    speed: number;
    opacity: number;
    mouseRef: React.MutableRefObject<THREE.Vector2>;
}) {
    const pointsRef = useRef<THREE.Points>(null!);

    const positions = useMemo(() => {
        const data = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            data[i * 3] = (Math.random() - 0.5) * 5;
            data[i * 3 + 1] = (Math.random() - 0.5) * 5;
            data[i * 3 + 2] = (Math.random() - 0.5) * 5;
        }
        return data;
    }, [count]);

    useFrame((state, delta) => {
        // Rotation based on time
        pointsRef.current.rotation.x += delta * speed * 0.1;
        pointsRef.current.rotation.y += delta * speed * 0.15;

        // Subtle mouse follow
        const targetX = mouseRef.current.x * 0.2;
        const targetY = mouseRef.current.y * 0.2;
        pointsRef.current.position.x += (targetX - pointsRef.current.position.x) * 0.05;
        pointsRef.current.position.y += (targetY - pointsRef.current.position.y) * 0.05;
    });

    return (
        <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
            <PointMaterial
                transparent
                color={color}
                size={size}
                sizeAttenuation={true}
                depthWrite={false}
                opacity={opacity}
                blending={THREE.AdditiveBlending}
            />
        </Points>
    );
}

function GlowingOrbs() {
    const meshRef1 = useRef<THREE.Mesh>(null!);
    const meshRef2 = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        meshRef1.current.position.x = Math.sin(time * 0.2) * 2;
        meshRef1.current.position.y = Math.cos(time * 0.3) * 1;

        meshRef2.current.position.x = Math.cos(time * 0.25) * -2;
        meshRef2.current.position.y = Math.sin(time * 0.35) * -1.5;
    });

    return (
        <group>
            <mesh ref={meshRef1} position={[2, 1, -5]}>
                <sphereGeometry args={[1.5, 32, 32]} />
                <meshBasicMaterial color="#26D968" transparent opacity={0.05} />
            </mesh>
            <mesh ref={meshRef2} position={[-2, -1, -5]}>
                <sphereGeometry args={[2, 32, 32]} />
                <meshBasicMaterial color="#3b82f6" transparent opacity={0.03} />
            </mesh>
        </group>
    );
}

function Scene() {
    const mouse = useRef(new THREE.Vector2(0, 0));

    const handleMouseMove = (event: PointerEvent) => {
        mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    useMemo(() => {
        if (typeof window !== "undefined") {
            window.addEventListener("pointermove", handleMouseMove);
        }
    }, []);

    return (
        <>
            <color attach="background" args={["#050505"]} />
            <ambientLight intensity={0.5} />

            <GlowingOrbs />

            <ParticleLayer
                count={2000}
                size={0.015}
                color="#26D968"
                speed={0.2}
                opacity={0.3}
                mouseRef={mouse}
            />

            <ParticleLayer
                count={3000}
                size={0.008}
                color="#ffffff"
                speed={0.1}
                opacity={0.15}
                mouseRef={mouse}
            />

            <ParticleLayer
                count={1000}
                size={0.025}
                color="#3b82f6"
                speed={0.05}
                opacity={0.1}
                mouseRef={mouse}
            />
        </>
    );
}

export default function ThreeBackground() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 2], fov: 75 }}
                dpr={[1, 2]}
            >
                <Scene />
            </Canvas>
            {/* CSS Overlay for extra atmosphere */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(38,217,104,0.05),transparent_70%)] pointer-events-none" />
        </div>
    );
}
