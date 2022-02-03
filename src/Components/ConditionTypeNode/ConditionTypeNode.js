import React from "react";
import { Handle } from "react-flow-renderer";
import { useDispatch } from "react-redux";
import styles from "./ConditionTypeNode.module.css";

function ConditionTypeNode() {
  const dispatch = useDispatch();
  const handleOnClick = (event) => {
    event.stopPropagation();
  };

  return (
    <div className={styles.WrapperWrapper}>
      <div className={styles.Wrapper}>
        <h2 className={styles.Heading}>Condition Workflow</h2>
        <button>Edit Condition</button>
        <button onClick={handleOnClick}>Swap Branches</button>
      </div>
      <Handle type="target" position="top" className={styles.Handle} />
      <Handle type="source" position="bottom" className={styles.Handle} />
    </div>
  );
}

export default ConditionTypeNode;
