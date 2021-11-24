import ConditionallyRender from "./ConditionallyRender/ConditionallyRender";
import RenderedList from "./RenderedList/RenderedList";
import ClassNames from "./ClassNames/ClassNames";
function App() {
  return (
    <div className="App">
      <ConditionallyRender />
      <RenderedList />
      <ClassNames />
    </div>
  );
}

export default App;
