import { MeshWobbleMaterial } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import type { Color, Mesh } from "three";

interface Props {
  position?: [number, number, number];
  color?: string;
}

const Sphere = ({ position, color }: Props) => {
  const sphereRef = useRef<Mesh>(null);

  const [isHover, setIsHover] = useState(false);

  useFrame((state, delta) => {
    if (!sphereRef.current) return;

    // sphereRef.current.rotation.x += delta;
    sphereRef.current.rotation.y += delta;

    // if (isHover) {
    //   sphereRef.current.scale.x = 1.5;
    //   sphereRef.current.scale.y = 1.5;
    //   sphereRef.current.scale.z = 1.5;
    // } else {
    //   sphereRef.current.scale.x = 1;
    //   sphereRef.current.scale.y = 1;
    //   sphereRef.current.scale.z = 1;
    // }
    // sphereRef.current.position.z += -(Math.sin(state.clock.elapsedTime) * 0.2);
  });

  return (
    <mesh
      // onPointerEnter={() => setIsHover(true)}
      // onPointerLeave={() => setIsHover(false)}
      ref={sphereRef}
      position={position}
    >
      <sphereGeometry />
      <MeshWobbleMaterial color={!isHover ? color : "red"} wireframe />
      {/* <meshStandardMaterial color={!isHover ? color : "red"} wireframe /> */}
    </mesh>
  );
};

export default Sphere;
