import { useState } from "react";
import { Text } from "@react-three/drei";

const MenuText = (props) => {
  const [hovered, setHovered] = useState(false);

  const handlePointerEnter = () => {
    setHovered(true);
    document.body.style.cursor = "pointer";
  };

  const handlePointerLeave = () => {
    setHovered(false);
    document.body.style.cursor = "auto";
  };

  return (
    <Text
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      font="./bangers-v20-latin-regular.woff"
      color={hovered ? "#16a34a" : "lightblue"} // Change color based on hover state
      fontSize={5}
      position={[0, 0.75, 0.75]}
      rotation-x={-1.55}
      maxWidth={2}
      textAlign="center"
      {...props}
    >
      {props.children}
    </Text>
  );
};

export default MenuText;
