import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import React from "react";
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ACTIVITY_LOCATION_SET, USER_CLICK_RECORD_MOOSE } from "./state/actions";
import { setupStore } from "./state/store";



export const UserFeedbackDisplay = (props: any) => {


  const locationState = useSelector((state: any) => state.Activity.location);

  const ref = useRef(0);
  ref.current += 1;
  console.log(
    "%UserFeedbackDisplay render:" + ref.current.toString(),
    "color: yellow"
  );
  console.log("props.count", props.count);


  return <>{locationState? 'moose spotted': 'click to record moose'}</>;
};


export const RecordMoose = (props: any) => {
  const dispatch = useDispatch();




  const ref = useRef(0);
  ref.current += 1;
  console.log(
    "%RecordMoose render:" + ref.current.toString(),
    "color: yellow"
  );


  const onClick = () => {
    dispatch({ type: USER_CLICK_RECORD_MOOSE});
  }

  return (
    <>
      <button onClick={onClick}></button>
    </>
  );
};

function App() {
  const ref = useRef(0);
  ref.current += 1;
  console.log("%cParent render:" + ref.current.toString(), "color: yellow");

  return (
      <>
      <RecordMoose />
      <UserFeedbackDisplay/>
      </>
  );
}

export default App;
