import { useState } from "react";
import { useKey } from "react-use";

const UseKeyComponent = () => {
  const [count, set] = useState(0);
  const increment = () => set((count) => ++count);
  useKey("ArrowUp", increment);

  return <div>Press arrow up: {count}</div>;
};

export default UseKeyComponent;
