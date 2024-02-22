import React from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import url from "../../assets/model/3/smol_ame_in_an_upcycled_terrarium_hololiveen.glb";

interface GltfModelProps {
  rotateX?: number;
  rotateY?: number;
  rotateZ?: number;
}

const GltfModel: React.FC<GltfModelProps> = ({
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
}) => {
  const gltf = useLoader(GLTFLoader, url);

  gltf.scene.scale.set(1.4, 1.4, 1.4);
  gltf.scene.rotation.x = rotateX;
  gltf.scene.rotation.y = rotateY;
  gltf.scene.rotation.z = rotateZ;

  return (
    <>
      <primitive object={gltf.scene} />
      <OrbitControls
        target={[0, 1.2, 0]}
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
        enableZoom={false}
      />
      <pointLight position={[0.5, 2, 0]} intensity={1.5} />
    </>
  );
};

export default GltfModel;
