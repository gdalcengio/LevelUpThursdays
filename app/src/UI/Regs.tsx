import { useRef } from "react";

import "./Regs.css";

export const Regs = (props: any) => {
  const ref = useRef(0);
  ref.current += 1;
  console.log("%Regs render:" + ref.current.toString(), "color: yellow");

  return <a href='hunting-trapping-synopsis.pdf'>
    <div className="PDFPanel"></div>
  </a>
}
