/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Circle: THREE.Mesh;
    Circle_1: THREE.Mesh;
    Circle_2: THREE.Mesh;
    Circle_3: THREE.Mesh;
    Circle_4: THREE.Mesh;
  };
  materials: {
    ["madeira.001"]: THREE.MeshStandardMaterial;
    stones: THREE.MeshStandardMaterial;
    ["Wax candle beige"]: THREE.MeshStandardMaterial;
    Flame: THREE.MeshStandardMaterial;
    ["Pavil candle"]: THREE.MeshStandardMaterial;
  };
};

export default function Model({ position }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF("/candle.glb") as GLTFResult;
  return (
    <group ref={group} dispose={null}>
      <group
        position={position}
        rotation={[Math.PI, -0.38, Math.PI]}
        scale={1.8}
      >
        <mesh
          geometry={nodes.Circle.geometry}
          material={materials["madeira.001"]}
        />
        <mesh geometry={nodes.Circle_1.geometry} material={materials.stones} />
        <mesh
          geometry={nodes.Circle_2.geometry}
          material={materials["Wax candle beige"]}
        />
        <mesh geometry={nodes.Circle_3.geometry} material={materials.Flame} />
        <mesh
          geometry={nodes.Circle_4.geometry}
          material={materials["Pavil candle"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/candle.glb");
