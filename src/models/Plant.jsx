import { useRef } from "react";
import Model from "../Model";
import { useFrame } from "@react-three/fiber";

const Plant = (props) => {
  const plantRef = useRef();

  useFrame((_, delta) => {
    if (plantRef.current) {
      plantRef.current.rotation.y += delta;
    }
  });

  return <Model model="plant" modelRef={plantRef} {...props} />;
};

export default Plant;
