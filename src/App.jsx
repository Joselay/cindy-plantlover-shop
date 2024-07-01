import Experience from "./Experience";
import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import LoadingScreen from "./components/LoadingScreen";
import About from "./components/About";
import { Toaster } from "react-hot-toast";

const audio = new Audio("/audio/plant.mp3");

const App = () => {
  const [start, setStart] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

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
      <Toaster position="top-center" />
      {isOpened && <About isOpened={isOpened} setIsOpened={setIsOpened} />}
      <Canvas shadows camera={{ position: [0, 80, 100], fov: 20 }}>
        <Suspense fallback={null}>
          <Experience setIsOpened={setIsOpened} />
        </Suspense>
      </Canvas>
      <LoadingScreen started={start} onStarted={handleStarted} />
    </>
  );
};

export default App;
