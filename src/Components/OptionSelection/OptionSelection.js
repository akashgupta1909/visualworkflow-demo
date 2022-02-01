import React, { useEffect } from "react";
import addNode from "../../Utils/Helpers/addNode";
import { useDispatch, useSelector } from "react-redux";

const SubOptionSelection = ({ name, callerFunction }) => {
  return (
    <div>
      <div onClick={callerFunction}>{name}</div>
    </div>
  );
};

const OptionSelection = () => {
  const initialElements = useSelector(
    (state) => state.handleNode.initialElements
  );
  const edgeId = useSelector((state) => state.handlePopUp.edgeId);
  const dispatch = useDispatch();
  return (
    <div>
      <SubOptionSelection
        name="Email"
        callerFunction={() => {
          const tempInitialElement = addNode(
            initialElements,
            edgeId,
            "default",
            true,
            "correct"
          );
          dispatch({
            type: "INITIAL_ELEMENTS",
            initialElements: tempInitialElement,
          });
          document.getElementById("LayoutButton").click();
        }}
      />
    </div>
  );
};

export default OptionSelection;
