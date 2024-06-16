import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Plant = (props) => {
  const { scene } = useGLTF("/plant.gltf");
  const ref = useRef();

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta;
    }
  });

  return <primitive {...props} ref={ref} object={scene} />;
};

export default Plant;
