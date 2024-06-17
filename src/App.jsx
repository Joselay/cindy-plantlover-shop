import Experience from "./Experience";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import LoadingScreen from "./components/LoadingScreen";
import Menu from "./components/Menu";

const audio = new Audio("/audio/plant.mp3");

const App = () => {
  const [start, setStart] = useState(false);

  const handleStarted = () => {
    setStart(true);
  };

  useEffect(() => {
    if (start) {
      audio.play();
    }
  }, [start]);

  useEffect(() => {
    const handleAudioEnd = () => {
      audio.currentTime = 0;
      audio.play();
    };

    audio.addEventListener("ended", handleAudioEnd);

    return () => {
      audio.removeEventListener("ended", handleAudioEnd);
    };
  }, []);

  return (
    <>
      {/* <Menu /> */}
      <Canvas shadows camera={{ position: [0, 250, 30], fov: 20 }}>
        <Suspense fallback={null}>
          <Experience />
        </Suspense>
      </Canvas>
      <LoadingScreen started={start} onStarted={handleStarted} />
    </>
  );
};

export default App;
