import { useGLTF } from "@react-three/drei";

const Cromlech = (props) => {
  const { scene } = useGLTF("/cromlech.gltf");

  return <primitive {...props} object={scene} />;
};

export default Cromlech;
