import CopyToClipboardComponent from "./CopyToClipboardComponent/CopyToClipboardComponent";
import ToggleComponent from "./ToggleComponent/ToggleComponent";
import UseKeyComponent from "./UseKeyComponent/UseKeyComponent";

const ReactUseComponent = () => {
  return (
    <div>
      <h3>Toggle Component</h3>
      <ToggleComponent />
      <h3>useKey Component</h3>
      <UseKeyComponent />
      <h3>CopyToClipboard Component</h3>
      <CopyToClipboardComponent />
    </div>
  );
};

export default ReactUseComponent;
