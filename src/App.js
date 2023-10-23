import ActionButtons from "./components/ActionButtons/ActionButtons";
import RenderTimeOut from "./components/RenderTimeOut/RenderTimeOut";
import Container from "./components/Container/Container";
import { useEffect, useState } from "react";

const App = () => {
  const [time,setTime] = useState(0);
  const [intervalId,setIntervalId] = useState(null);
  let id;

  const startTime = () => {
    id = setInterval (() => {
      setTime(prevValue => prevValue + 1);
    }, 1);

    setIntervalId(id);
  };

  const stopTime = () => {
    console.log('id', intervalId);
    clearInterval(intervalId);
  };

  const resetTime = () => {
    setTime(0);
  };

  useEffect(() => {
    return () => {
       if(id) clearInterval(id);
    };
  }, []);

  return (
    <div>
      <Container>
        <RenderTimeOut time={time}/>
        <ActionButtons onClick={startTime}>START</ActionButtons>
        <ActionButtons onClick={stopTime}>STOP</ActionButtons>
        <ActionButtons onClick={resetTime}>RESET</ActionButtons>
      </Container>
    </div>
  );
};

export default App;
