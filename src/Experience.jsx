import { useRef } from "react";
import {
  CameraControls,
  ContactShadows,
  Environment,
  Text,
} from "@react-three/drei";
import Cromlech from "./models/Cromlech";
import Cactus from "./models/Cactus";
import Eggplant from "./models/Eggplant";
import Plant from "./models/Plant";
import TreeLime from "./models/TreeLime";
import TreeBeech from "./models/TreeBeech";
import Tree from "./models/Tree";
import LowPolyTree from "./models/LowPolyTree";
import TreeSpruce from "./models/TreeSpruce";

const Experience = () => {
  const cameraControlsRef = useRef();

  const handleObjectClick = (position) => {
    if (cameraControlsRef.current) {
      const cameraDistance = 5; // Distance from the object
      const zoomLevel = 1; // Zoom level
      const offsetY = -4; // Elevation offset

      cameraControlsRef.current.setLookAt(
        position[0],
        position[1],
        position[2], // Camera target position
        position[0],
        position[1] + offsetY,
        position[2] - cameraDistance, // Camera position
        true // Smooth transition
      );
      cameraControlsRef.current.zoomTo(zoomLevel, true); // Zoom level and smooth transition
    }
  };

  return (
    <>
      <CameraControls ref={cameraControlsRef} />
      <Environment preset="sunset" />
      <group>
        <Cromlech position={[0, 1, 0]} />
        <Cactus
          position={[-13, 1, 2]}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerLeave={() => (document.body.style.cursor = "auto")}
          onClick={() => handleObjectClick([-13, 1, 2])}
        />
        <Plant
          scale={3}
          position={[-4, 2.2, -12]}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerLeave={() => (document.body.style.cursor = "auto")}
          onClick={() => handleObjectClick([-4, 2.2, -12])}
        />
        <Eggplant
          position={[9, 1, 7]}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerLeave={() => (document.body.style.cursor = "auto")}
          onClick={() => handleObjectClick([9, 1, 7])}
        />
        <TreeLime position={[-32, 0, 0]} />
        <TreeBeech position={[30, 0, 0]} />
        <Tree scale={22} position={[13, 0, -30]} />
        <LowPolyTree scale={8} position={[-12, 0, -30]} />
        <TreeSpruce scale={0.8} position={[-10, 0, 30]} />
        <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={5}
          position={[0, 0.75, 0.75]}
          rotation-x={-1.55}
          maxWidth={2}
          textAlign="center"
        >
          MENU
        </Text>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="lightblue" />
      </mesh>
      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, 0, 0]}
        opacity={0.5}
        width={10}
        height={10}
        blur={1}
        far={10}
      />
    </>
  );
};

export default Experience;
