import { useRef } from "react";
import "./Form.css";

export const FormPanel = (props: any) => {
  const ref = useRef(0);
  ref.current += 1;
  console.log("%FormPanel render:" + ref.current.toString(), "color: yellow");

  return (
    <div className="FormPanel">
      <div className="inputsContainer">
        <div className="headerBar" />
        <div className="meese" />
      </div>
    </div>
  );
};
