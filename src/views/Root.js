import { useState, useEffect, useRef } from "react";
import ClassComponent from "./ClassComponent/ClassComponent";
import FunctionalComponent from "./FunctionalComponent/FunctionalComponent";

function App() {
  const [isClass, setIsClass] = useState(false);
  const [time, setTime] = useState(0);
  let intervalId = useRef(null);

  const handleClick = () => {
    setIsClass((prev) => !prev);
  };

  const consoleInterval = (val) => {
    console.log(`Root: ${val}`);
  };

  useEffect(() => {
    const myInterval = setInterval(() => {
      setTime((prev) => ++prev);
    }, 1000);

    intervalId.current = myInterval;

    return () => {
      clearInterval(intervalId.current);
    };
  }, []);

  useEffect(() => {
    consoleInterval(time);
  }, [time]);

  return (
    <div className="App">
      {isClass ? (
        <ClassComponent rootTime={time} />
      ) : (
        <FunctionalComponent rootTime={time} />
      )}

      <button onClick={handleClick}>switch Component</button>
    </div>
  );
}

export default App;
