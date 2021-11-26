import store from "../store/store";
import { Provider } from "react-redux";

function App() {
  return <Provider store={store}>test</Provider>;
}

export default App;
