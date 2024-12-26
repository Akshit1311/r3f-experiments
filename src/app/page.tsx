"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import Cube from "./components/Cube";
import Sphere from "./components/Sphere";
import { OrbitControls } from "@react-three/drei";
import { Leva, useControls } from "leva";

export default function Home() {
  const { cubeColor } = useControls({ cubeColor: "hotpink" });

  return (
    <div className=" h-screen">
      <Leva />
      <Canvas>
        <ambientLight intensity={0.8} />
        <pointLight intensity={200} position={[10, 5, 1]} />
        <pointLight intensity={200} position={[-10, 5, 1]} />
        <Cube color={"dodgerblue"} position={[3, 0, 0]} />
        <Cube position={[-3, 0, 0]} color={cubeColor} />
        <Sphere position={[0, 0, 0]} color={"grey"} />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
