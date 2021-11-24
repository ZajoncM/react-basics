import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const FunctionalComponent = ({ rootTime }) => {
  const [time, setTime] = useState(0);
  let intervalId = useRef(null);

  const consoleInterval = (val) => {
    console.log(`Functional: ${val}`);
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
    <div>
      <p>FunctionalComponent: {time}</p>
      <p>Root: {rootTime}</p>
    </div>
  );
};

FunctionalComponent.propTypes = {
  rootTime: PropTypes.number,
};

export default FunctionalComponent;
