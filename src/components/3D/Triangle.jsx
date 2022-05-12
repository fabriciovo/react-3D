import { Tetrahedron } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";

function Triangle() {
  const ref = useRef();
  const [hovered, hover] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.z += 0.01;
  });

  return (
    <mesh
      ref={ref}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
    >
      <tetrahedronBufferGeometry />
      <meshLambertMaterial
        attach={"material"}
        color={hovered ? "purple" : "aqua"}
      />
    </mesh>
  );
}
export default Triangle;
