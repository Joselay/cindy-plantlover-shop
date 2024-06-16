import { useRef } from "react";
import Model from "../Model";
import { useFrame } from "@react-three/fiber";

const Cactus = (props) => {
  const cactusRef = useRef();

  useFrame((_, delta) => {
    if (cactusRef.current) {
      cactusRef.current.rotation.y += delta;
    }
  });

  return (
    <Model
      scale={2}
      position={props.position}
      model="cactus"
      modelRef={cactusRef}
      {...props}
    />
  );
};

export default Cactus;
