import "./App.css";
import { Canvas } from "@react-three/fiber";
import Box from "./components/3D/Box/Box";
import { OrbitControls } from "@react-three/drei";
function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls enableZoom={false}/>
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} intensity={1} />
        <Box />
      </Canvas>
    </div>
  );
}

export default App;
