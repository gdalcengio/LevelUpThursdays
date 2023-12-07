import { useRef } from "react";
import "./Map.css"



export const MapPanel = (props: any) => {
  const ref = useRef(0);
  ref.current += 1;
  console.log("%MapPanel render:" + ref.current.toString(), "color: yellow");

    return <div className="MapPanel"></div>
}