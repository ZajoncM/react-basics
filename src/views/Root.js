import store from "../store";
import { Provider } from "react-redux";
import Counter from "./Counter/Counter";

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
