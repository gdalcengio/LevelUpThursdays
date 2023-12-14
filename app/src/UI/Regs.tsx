import { useEffect, useRef } from "react";
import "./Regs.css";

import { Browser } from '@capacitor/browser';

export const Regs = (props: any) => {
  const ref = useRef(0);
  ref.current += 1;
  console.log("%Regs render:" + ref.current.toString(), "color: yellow");
  
  useEffect(() => {
    Browser.open({ url: 'http://www.africau.edu/images/default/sample.pdf'});
  }, []);
  return (
    <div className="PDFPanel">
    </div>
  );
};