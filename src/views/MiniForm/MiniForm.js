import {
  useReducer,
  useState,
  useMemo,
  useEffect,
  useCallback,
  useRef,
} from "react";

const initialValue = {
  name: "",
  surname: "",
  age: 0,
};

const actionTypes = {
  INPUT: "INPUT",
  CLEAR: "CLEAR",
  SUBMIT: "SUBMIT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.INPUT:
      return { ...state, [action.field]: action.value };
    case actionTypes.CLEAR:
      return initialValue;
    case actionTypes.SUBMIT:
      return {
        name: "send",
        surname: "send",
        age: 999,
      };
    default:
      return state;
  }
};

const longFunction = (number) => {
  for (let i = 0; i < 3000000000; i++);
  return `Result ${number}`;
};

const MiniForm = () => {
  const [value, dispatch] = useReducer(reducer, initialValue);
  const [randomNumber, setRandomNumber] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  const callbackExampleFunction = useCallback(
    () => "Hello Child Component",
    []
  );

  const getLongFunction = useMemo(
    () => longFunction(randomNumber),
    [randomNumber]
  );

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.INPUT,
      value: e.target.value,
      field: e.target.name,
    });
  };

  const handleClear = () => {
    dispatch({ type: actionTypes.CLEAR });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: actionTypes.SUBMIT });
  };

  const getRandomNumber = () => {
    setRandomNumber(Math.random());
  };

  return (
    <div>
      <h2>useReducer Example:</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          ref={ref}
          value={value.name}
          onChange={(e) => handleInputChange(e)}
        />
        <label htmlFor="surname">Surname:</label>
        <input
          type="text"
          name="surname"
          value={value.surname}
          onChange={(e) => handleInputChange(e)}
        />
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          name="age"
          value={value.age}
          onChange={(e) => handleInputChange(e)}
        />
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
        <button type="button" onClick={handleClear}>
          Clear
        </button>
      </form>

      <h2>useMemo Example:</h2>

      <button type="button" onClick={getRandomNumber}>
        Random
      </button>
      {getLongFunction}

      <h2>useCallback Example:</h2>
      <ChildComponent someFunction={callbackExampleFunction} />
    </div>
  );
};

const ChildComponent = ({ someFunction }) => {
  useEffect(() => {
    console.log(someFunction());
  }, [someFunction]);

  return <p>ChildComponent</p>;
};

export default MiniForm;
