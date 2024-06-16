import { useGLTF } from "@react-three/drei";

const Tree = (props) => {
  const { scene } = useGLTF(`/${props.modal}.gltf`);

  return <primitive {...props} object={scene} />;
};

export default Tree;
