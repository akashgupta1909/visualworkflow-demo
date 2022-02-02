import React, { useEffect, useState } from "react";
import { Handle } from "react-flow-renderer";
import { useDispatch } from "react-redux";
import styles from "./SmsTypeNode.module.css";
import PopUpComponent from "./PopUpComponent";

function SmsTypeNode() {
  const [smsDetails, setSmsDetails] = useState({
    name: "",
    smsBody: "",
  });
  const dispatch = useDispatch();

  const handleOnChange = (smsDetails) => {
    setSmsDetails(smsDetails);
  };

  const handleClick = (event) => {
    event.stopPropagation();
    dispatch({
      type: "HANDLE_COMPONENT_RENDER",
      componentToRender: (
        <PopUpComponent
          handleOnChange={handleOnChange}
          inputSmsBody={smsDetails.smsBody}
          inputName={smsDetails.name}
        />
      ),
    });
    dispatch({ type: "HANDLE_POP_UP", popUpState: true });
  };

  return (
    <div className={styles.WrapperWrapper}>
      <div className={styles.Wrapper}>
        <button onClick={handleClick}>Edit SMS Details</button>
        <button>Select SMS Template</button>
      </div>
      <Handle type="target" position="top" className={styles.Handle} />
      <Handle type="source" position="bottom" className={styles.Handle} />
    </div>
  );
}

export default SmsTypeNode;
