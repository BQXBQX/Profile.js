import { Canvas } from "@react-three/fiber";
import GltfModel from "./GltfModel";

const WelcomeModel = () => {
  return (
    <>
      <Canvas>
        <GltfModel rotateX={Math.PI / 8} rotateY={-Math.PI / 8}></GltfModel>
      </Canvas>
    </>
  );
};

export default WelcomeModel;
