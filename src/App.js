import ActionButtons from "./components/ActionButtons/ActionButtons";
import RenderTimeOut from "./components/RenderTimeOut/RenderTimeOut";
import Container from "./components/Container/Container";
import { useState } from "react";

const App = () => {
  const [time,setTime] = useState(0);
  const [interval,setInterval] = useState(null);

  
  return (
    <div>
      <Container>
        <RenderTimeOut />
        <ActionButtons>START</ActionButtons>
        <ActionButtons>DELETE</ActionButtons>
        <ActionButtons>RESET</ActionButtons>
      </Container>
    </div>
  );
};

export default App;
