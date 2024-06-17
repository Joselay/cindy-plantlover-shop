import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState, useMemo } from "react";
import { useSpring, animated } from "@react-spring/three";
import { MeshStandardMaterial } from "three";

const Cactus = (props) => {
  const { scene } = useGLTF("/plant.gltf");
  const ref = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.5;
    }
  });

  const glowMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        emissive: "white",
        emissiveIntensity: hovered ? 1 : 0.2,
        transparent: true,
        opacity: 0.7,
      }),
    [hovered]
  );

  // Spring animation for position
  const { position } = useSpring({
    position: hovered
      ? [props.position[0], props.position[1] + 1, props.position[2]]
      : props.position,
    config: { mass: 1, tension: 170, friction: 26 },
  });

  const handlePointerOver = () => {
    document.body.style.cursor = "pointer";
    setHovered(true);
  };

  const handlePointerOut = () => {
    document.body.style.cursor = "auto";
    setHovered(false);
  };

  return (
    <animated.group
      {...props}
      ref={ref}
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <primitive object={scene} material={glowMaterial} />
    </animated.group>
  );
};

export default Cactus;
