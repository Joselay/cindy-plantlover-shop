import Experience from "./Experience";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import LoadingScreen from "./components/LoadingScreen";

const audio = new Audio("/audio/plant.mp3");

const App = () => {
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (start) {
      audio.play();
    }
  }, [start]);

  return (
    <>
      <Canvas shadows camera={{ position: [0, 5, 10], fov: 50 }}>
        <Suspense fallback={null}>{<Experience />}</Suspense>
      </Canvas>
      <LoadingScreen started={start} onStarted={() => setStart(true)} />
    </>
  );
};

export default App;
