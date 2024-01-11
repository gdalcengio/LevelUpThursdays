import { useRef, useState } from "react";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { ACTIVITY_DELETE_MOOSE, GET_GEOLOCATION, USER_CLICK_ADD_MOOSE, USER_CLICK_RECORD_GENDER } from "../state/actions";
import { ACTIVITY_UPDATE_MOOSE } from "../state/actions/index";
import { Age } from "./Enums";

export const FormPanel = (props: any) => {
  const ref = useRef(0);
  ref.current += 1;
  console.log("%FormPanel render:" + ref.current.toString(), "color: yellow");
  
  const dispatch = useDispatch();

  const handleAgeChange = (mooseId: number, mooseAge: string) => {
    dispatch({ type: ACTIVITY_UPDATE_MOOSE, payload: { id: mooseId, age: mooseAge} });
  };
  const handleGenderChange = (mooseId: number, mooseGender: string) => {
    dispatch({ type: ACTIVITY_UPDATE_MOOSE, payload: { id: mooseId, gender: mooseGender } });
  };

  const mooseArray = useSelector((state: any) => state.MooseSightingsState.mooseArray);

  return (
    <div className="FormPanel">
      <div className="inputsContainer">
        <div className="headerBar">
          <button
            className="addMooseButton"
            onClick={() => {
              dispatch({ type: USER_CLICK_ADD_MOOSE });
            }}
          >
            Add Moose
          </button>
          <button
            className="recordLocationButton"
            onClick={() => {
              dispatch({ type: GET_GEOLOCATION});
            }}
          >
            Mark Location
          </button>
        </div>
        <div className="meese">
          {mooseArray.map((moose: any) => {
            return (
              <>
                <div className="moose" key={moose.id}>
                  {moose.id}
                  <select
                  id="ageSelector"
                  value={moose.age}
                  onChange={(event) => {
                    console.log(moose.id);
                    handleAgeChange(moose.id, event.target.value)
                  }}
                >
                  {
                    Object.values(Age).map((age, i) => {
                      return (
                        <option key={i + 1} value={age}>
                          {age}
                        </option>
                      );
                    })
                  }
                </select>
                <select
                  id="genderSelector"
                  value={moose.gender}
                  onChange={(event) => {
                    handleGenderChange(moose.id, event.target.value.toString())
                  }}
                >
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='unknown'>Unknown</option>
                </select>
                <button onClick={() => {
                  dispatch({type: ACTIVITY_DELETE_MOOSE, payload: { id: moose.id } })
                }}>
                  Delete
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
