

function SimpleBox() {
  return (
    <mesh rotation={[90, 0, 20]}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshLambertMaterial attach={"material"} />
    </mesh>
  );
}

export default SimpleBox;
