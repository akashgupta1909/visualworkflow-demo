import React from "react";

import { Handle } from "react-flow-renderer";
import styles from "./ButtonTypeNode.module.css";
import { useDispatch } from "react-redux";

const ButtonTypeNode = ({ id, data, isConnectable }) => {
  const dispatch = useDispatch();
  const onEdgeClick = (evt, id) => {
    evt.stopPropagation();
    dispatch({ type: "HANDLE_EDGE_CLICK", edgeId: id });
  };
  return (
    <div
      style={
        {
          // width: 150,
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
        }
      }
    >
      <Handle type="target" position="top" className={styles.Handle} />
      <button
        className={styles.Button}
        onClick={(event) => {
          dispatch({ type: "HANDLE_POP_UP", popUpState: true });
          onEdgeClick(event, id);
        }}
      >
        +
      </button>
    </div>
  );
};
export default ButtonTypeNode;
