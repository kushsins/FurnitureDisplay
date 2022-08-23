/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh;
    Cylinder_1: THREE.Mesh;
    Cylinder_2: THREE.Mesh;
  };
  materials: {
    ["Material.019"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
  };
};

export default function Model({ ...props }: JSX.IntrinsicElements["group"]) {
  const group = useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF("/curtain.glb") as GLTFResult;
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.02, 5.4]}>
        <mesh
          geometry={nodes.Cylinder.geometry}
          material={materials["Material.019"]}
        />
        <mesh
          geometry={nodes.Cylinder_1.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Cylinder_2.geometry}
          material={materials["Material.007"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/curtain.glb");