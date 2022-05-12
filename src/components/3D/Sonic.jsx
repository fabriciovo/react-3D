import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

export default function Sonic() {
  const materials = useLoader(MTLLoader, "./objs/Sonic/sonic.mtl");
  const obj = useLoader(OBJLoader, "./objs/Sonic/sonic.obj", (loader) => {
    materials.preload();
    loader.setMaterials(materials);
  });

  return <primitive object={obj} scale={0.2} position={[0,-1,0]} />;
}
