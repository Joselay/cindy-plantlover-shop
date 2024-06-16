import { useFrame } from "@react-three/fiber";
import Model from "../Model";
import { useRef } from "react";

const Eggplant = (props) => {
  const eggplantRef = useRef();

  useFrame((_, delta) => {
    if (eggplantRef.current) {
      eggplantRef.current.rotation.y += delta;
    }
  });

  return (
    <Model
      scale={8}
      position={props.position}
      model="eggplant"
      modelRef={eggplantRef}
      {...props}
    />
  );
};

export default Eggplant;
