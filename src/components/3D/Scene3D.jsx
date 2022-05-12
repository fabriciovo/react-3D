import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { OrbitControls } from "@react-three/drei";
import { useEffect } from "react";
import DisplayObjects from "./DisplayObjects";
import SimpleBox from "./SimpleBox";
import AnimationBox from "./AnimationBox";
import Triangle from "./Triangle";
import Iphone from "./Iphone";
import Sonic from "./Sonic";

const objects = [
  <SimpleBox />,
  <AnimationBox position={[0, 0, 0]} />,
  <Triangle />,
  <Iphone />,
  <Sonic />,
];

function Scene3D() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (objects.length === index) {
      setIndex(0);
    }
  }, [index]);

  return (
    <div>
      <button onClick={() => setIndex((prev) => prev + 1)}>Change Model</button>
      <br />
      <button>Create your 3D World!</button>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <OrbitControls enableZoom={false} />
        <DisplayObjects object={objects[index]} />
      </Canvas>
      <button>Create your 3D World!</button>
    </div>
  );
}
export default Scene3D;
