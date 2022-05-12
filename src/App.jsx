import styled from "styled-components";
import TextSection from "./components/Title/Title";
import Scene3D from "./components/3D/Scene3D";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #322d6d 6.33%, #663182 39.13%);
  text-align: center;
  overflow: hidden;
  canvas {
    width:100%;
    height:600px;
  }
`;

function App() {
  return (
    <Wrapper className="App">
      <TextSection />
      
      <Scene3D />
      
    </Wrapper>
  );
}

export default App;
