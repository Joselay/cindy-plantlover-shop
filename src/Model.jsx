import { useGLTF } from "@react-three/drei";

const Model = ({ model, modelRef, ...props }) => {
  const { scene } = useGLTF(`${model}.gltf`);

  if (modelRef) {
    return <primitive ref={modelRef} object={scene} {...props} />;
  }
  return <primitive object={scene} {...props} />;
};

export default Model;
