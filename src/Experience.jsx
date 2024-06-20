import { useRef } from "react";
import { CameraControls, ContactShadows, Environment } from "@react-three/drei";
import Cromlech from "./models/Cromlech";
import Cactus from "./models/Cactus";
import Eggplant from "./models/Eggplant";
import Plant from "./models/Plant";
import Tree from "./models/Tree";
import MenuText from "./components/MenuText";

const Experience = () => {
  const cameraControlsRef = useRef();

  const handleObjectClick = (position) => {
    if (cameraControlsRef.current) {
      const cameraDistance = 5;
      const zoomLevel = 1;
      const offsetY = -4;

      cameraControlsRef.current.setLookAt(
        position[0],
        position[1] + 28,
        position[2] + 28,
        position[0],
        position[1] + offsetY,
        position[2] - cameraDistance,
        true
      );
      cameraControlsRef.current.zoomTo(zoomLevel, true);
    }
  };

  return (
    <>
      <CameraControls ref={cameraControlsRef} />
      <Environment preset="sunset" />
      <group>
        <Cromlech position={[0, 1, 0]} />
        <Plant
          scale={3}
          position={[-4, 2.2, -12]}
          onClick={() => handleObjectClick([-4, 2.2, -12])}
        />
        <Cactus
          scale={2}
          position={[-13, 1, 2]}
          onClick={() => handleObjectClick([-13, 1, 2])}
        />

        <Eggplant
          position={[9, 1, 7]}
          scale={10}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerLeave={() => (document.body.style.cursor = "auto")}
          onClick={() => handleObjectClick([9, 1, 7])}
        />
        <Tree modal="tree-lime" position={[-32, 0, 0]} />
        <Tree modal="tree-beech" position={[30, 0, 0]} />
        <Tree modal="xmas-tree" scale={6} position={[13, 0, -30]} />
        <Tree modal="low-poly-tree" scale={8} position={[-12, 0, -30]} />
        <MenuText onClick={() => handleObjectClick([0, 0, 0])}>Cindy</MenuText>
      </group>
      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="#4ade80" />
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
