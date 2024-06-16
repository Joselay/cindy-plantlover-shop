import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cactus = (props) => {
  const { scene } = useGLTF("/cactus.gltf");
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.5;
  });

  return <primitive {...props} ref={ref} object={scene} />;
};

export default Cactus;
