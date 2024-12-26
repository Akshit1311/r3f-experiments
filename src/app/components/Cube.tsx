import { MeshWobbleMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import type { Color, Mesh } from "three";

interface Props {
  position?: [number, number, number];
  color?: string;
}

const Cube = ({ position, color }: Props) => {
  const cubeRef = useRef<Mesh>(null);

  useFrame(() => {
    if (!cubeRef.current) return;

    cubeRef.current.rotation.x += 0.01;
    cubeRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={cubeRef} position={position}>
      <boxGeometry />
      <MeshWobbleMaterial color={color} />
      {/* <meshStandardMaterial color={color} /> */}
    </mesh>
  );
};

export default Cube;
