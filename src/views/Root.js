import { useState, createContext } from "react";
import ExampleCard from "./ExampleCard/ExampleCard";
import MiniForm from "./MiniForm/MiniForm";
import ReactUseComponent from "./ReactUseComponent/ReactUseComponent";

export const ExampleContext = createContext();

function App() {
  const [title, setTitle] = useState("Example Title");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <ExampleContext.Provider value={{ title }}>
      <MiniForm />
      <h2>Context Example</h2>
      <h3>Root Title: {title}</h3>
      <ExampleCard />
      <input type="text" value={title} onChange={(e) => handleChange(e)} />
      <h2>React-use Example</h2>
      <ReactUseComponent />
    </ExampleContext.Provider>
  );
}

export default App;
