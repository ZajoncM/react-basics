import { useContext } from "react";
import { ExampleContext } from "../Root";

const ExampleTitle = () => {
  const { title } = useContext(ExampleContext);
  return <h3>ChildTitle: {title}</h3>;
};

export default ExampleTitle;
