import React, { useEffect } from "react";
import addNode from "../../Utils/Helpers/addNode";
import { useSelector } from "react-redux";

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

  return (
    <div>
      <SubOptionSelection
        name="Email"
        callerFunction={() => {
          addNode(initialElements, edgeId);
        }}
      />
    </div>
  );
};

export default OptionSelection;
