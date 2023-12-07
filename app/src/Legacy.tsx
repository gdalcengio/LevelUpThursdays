import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { USER_CLICK_RECORD_MOOSE, ACTIVITY_LOCATION_SET } from "./state/actions";

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
  const recordingMooseInProgress = useSelector((state: any) => state.Activity.recordingMooseInProgress)
  const location = useSelector((state: any) => state.Activity.location)

  const ref = useRef(0);
  ref.current += 1;
  console.log(
    "%RecordMoose render:" + ref.current.toString(),
    "color: yellow"
  );


  const onClick = () => {
    dispatch({ type: USER_CLICK_RECORD_MOOSE});
  }

  const locationOnClick = (e: any) => {
    const location = e.target.value
    dispatch({ type: ACTIVITY_LOCATION_SET, payload: {location: location} });
  }


  return (
    <>
      { recordingMooseInProgress ? <><input id="locationInput" value={location} onChange={locationOnClick}></input><button onClick={locationOnClick}>Record Moose Location</button></>: <></> }
      {recordingMooseInProgress ? <></> : <button onClick={onClick}>Record Moose</button>}
    </>
  );
};