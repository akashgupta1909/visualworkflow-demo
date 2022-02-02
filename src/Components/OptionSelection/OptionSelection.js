import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./OptionSelection.module.css";
import SubOptionSelection from "./SubOptionSelction";

import addNode from "../../Utils/Helpers/addNode";

// import TextsmsIcon from "@mui/icons-material/Textsms";
// import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
// import SwapCallsIcon from "@mui/icons-material/SwapCalls";

const OptionSelection = () => {
  const initialElements = useSelector(
    (state) => state.handleNode.initialElements
  );
  const edgeId = useSelector((state) => state.handlePopUp.edgeId);
  const dispatch = useDispatch();
  return (
    <div className={styles.WrapperWrapper}>
      <h2 className={styles.Heading}>Add a next step to your workflow</h2>
      <div className={styles.Wrapper}>
        <SubOptionSelection
          name="sms"
          // svgIcon={TextsmsIcon}
          // callerFunction={() => {
          //   const tempInitialElement = addNode(
          //     initialElements,
          //     edgeId,
          //     "default",
          //     true,
          //     "correct"
          //   );
          //   dispatch({
          //     type: "INITIAL_ELEMENTS",
          //     initialElements: tempInitialElement,
          //   });
          //   document.getElementById("LayoutButton").click();
          // }}
        />
        <SubOptionSelection name="delay" />
        <SubOptionSelection name="condition" />
      </div>
    </div>
  );
};

export default OptionSelection;
