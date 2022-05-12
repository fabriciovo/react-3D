import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, TransformControls, useCursor } from "@react-three/drei";
import { useControls } from "leva";
import create from "zustand";
const useStore = create((set) => ({
  target: null,
  setTarget: (target) => set({ target }),
}));

import styled from "styled-components";


const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #322d6d 6.33%, #663182 39.13%);
  text-align: center;
  overflow: hidden;
  canvas {
    width: 100%;
    height: 600px;
  }
`;

function Box(props) {
  const setTarget = useStore((state) => state.setTarget);
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  return (
    <mesh
      {...props}
      onClick={(e) => setTarget(e.object)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <boxGeometry />
      <meshNormalMaterial />
    </mesh>
  );
}

function Sandbox() {
  const { target, setTarget } = useStore();
  const { mode } = useControls({
    mode: { value: "translate", options: ["translate", "rotate", "scale"] },
  });

  return (
    <Wrapper>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <OrbitControls makeDefault />
        {target && <TransformControls object={target} mode={mode} />}
        <Box position={[2, 2, 0]} />
        <Box />
      </Canvas>
    </Wrapper>
  );
}
export default Sandbox;
