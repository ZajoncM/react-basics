import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./ClassNames.css";

let cx = classNames.bind(styles);

const ClassNames = () => {
  const [btnState, setBtnState] = useState("");

  let classNames = cx({
    btn: true,
    clicked: btnState === "click",
    disabled: btnState === "disabled",
  });

  const handleClick = () => {
    if (btnState !== "disabled") {
      setBtnState("click");
    }
  };

  const toggleDisable = () => {
    if (btnState === "disabled") {
      setBtnState("");
    } else {
      setBtnState("disabled");
    }
  };

  return (
    <div>
      <button onClick={handleClick} className={classNames}>
        changing button
      </button>
      <button onClick={toggleDisable}>disable</button>
    </div>
  );
};

export default ClassNames;
