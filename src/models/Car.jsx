import { useGLTF } from "@react-three/drei";

const Car = (props) => {
  const { scene } = useGLTF("/car.gltf");

  return <primitive {...props} object={scene} />;
};

export default Car;
