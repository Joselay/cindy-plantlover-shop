import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";

const App = () => {
  return (
    <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
      <Experience />
    </Canvas>
  );
};

export default App;
