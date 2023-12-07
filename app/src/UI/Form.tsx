import { useRef } from "react";
import "./Form.css";
import { useDispatch, useSelector } from "react-redux";
import { USER_CLICK_ADD_MOOSE } from "../state/actions";

export const FormPanel = (props: any) => {
  const ref = useRef(0);
  ref.current += 1;
  console.log("%FormPanel render:" + ref.current.toString(), "color: yellow");

  const dispatch = useDispatch();

  const mooseArray = useSelector((state: any) => state.Activity.mooseArray);

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
        </div>
        <div className="meese">
          {mooseArray.map((moose: any) => {
            return (
              <div className="moose" key={moose.id}>
                blanabba
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
