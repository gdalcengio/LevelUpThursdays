import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ACTIVITY_LOCATION_SET } from "./state/actions";
import { setupStore } from "./state/store";



export const CountDisplay = (props: any) => {


  const locationState = useSelector((state: any) => state.Activity.location);

  const ref = useRef(0);
  ref.current += 1;
  console.log(
    "%cCountDisplay render:" + ref.current.toString(),
    "color: yellow"
  );
  console.log("props.count", props.count);


  return <>{locationState}</>;
};


export const CounterComponent = (props: any) => {
  const dispatch = useDispatch();




  const ref = useRef(0);
  ref.current += 1;
  console.log(
    "%cCounterComponent render:" + ref.current.toString(),
    "color: yellow"
  );


  const onClick = () => {
    dispatch({ type: ACTIVITY_LOCATION_SET, payload: { location: "test" }});
  }

  return (
    <>
      <button onClick={onClick}></button>
      {/*<CountDisplay count={count} /> */}
    </>
  );
};

function App() {
  const ref = useRef(0);
  ref.current += 1;
  console.log("%cParent render:" + ref.current.toString(), "color: yellow");

  return (
      <>
      <CounterComponent />
      <CountDisplay/>
      </>
  );
}

export default App;
