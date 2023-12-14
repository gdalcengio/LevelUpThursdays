import { useRef } from "react";
import "./App.css";
import { FormPanel } from "./UI/Form";
import { MapPanel } from "./UI/Map";
import './index.css'
import { Header } from "./UI/Header";
import { Footer } from "./UI/Footer";
import { Regs } from "./UI/Regs";


function App() {
  const ref = useRef(0);
  ref.current += 1;
  console.log("%cParent render:" + ref.current.toString(), "color: yellow");

  return (
      <div className="rootContainer">
        <Header/>
        <MapPanel/>
        <FormPanel/>
        <Footer/>
        <Regs/>
      </div>
  );
}

export default App;
