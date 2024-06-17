import { useRef } from "react";
import { CameraControls, ContactShadows, Environment } from "@react-three/drei";
import Cromlech from "./models/Cromlech";
import Cactus from "./models/Cactus";
import Eggplant from "./models/Eggplant";
import Plant from "./models/Plant";
import Tree from "./models/Tree";
import { Perf } from "r3f-perf";
import { Canvas } from "@react-three/fiber";
import MenuText from "./components/MenuText";

const Experience = () => {
  const cameraControlsRef = useRef();

  const handleObjectClick = (position) => {
    if (cameraControlsRef.current) {
      const cameraDistance = 5; // Distance from the object
      const zoomLevel = 1; // Zoom level
      const offsetY = -4; // Elevation offset

      cameraControlsRef.current.setLookAt(
        position[0],
        position[1] + 10,
        position[2] + 10, // Camera target position
        position[0],
        position[1] + offsetY,
        position[2] - cameraDistance, // Camera position
        true // Smooth transition
      );
      cameraControlsRef.current.zoomTo(zoomLevel, true); // Zoom level and smooth transition
    }
  };

  return (
    <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
      <Perf position="top-left" />
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
          scale={8}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerLeave={() => (document.body.style.cursor = "auto")}
          onClick={() => handleObjectClick([9, 1, 7])}
        />
        <Tree modal="tree-lime" position={[-32, 0, 0]} />
        <Tree modal="tree-beech" position={[30, 0, 0]} />
        <Tree modal="xmas-tree" scale={6} position={[13, 0, -30]} />
        <Tree modal="low-poly-tree" scale={8} position={[-12, 0, -30]} />
        <Tree modal="tree-spruce" scale={0.8} position={[-10, 0, 30]} />
        <MenuText onClick={() => handleObjectClick([0, 0, 0])}>MENU</MenuText>
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
    </Canvas>
  );
};

export default Experience;
