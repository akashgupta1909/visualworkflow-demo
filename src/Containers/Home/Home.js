import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactFlow from "react-flow-renderer";

import styles from "./Home.module.css";
import ButtonEdge from "../../Components/ButtonEdge";
import PopUp from "./../../Components/PopUp";
import OptionSelection from "../../Components/OptionSelection";

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const edgeTypes = {
  buttonedge: ButtonEdge,
};

const Home = () => {
  const elements = useSelector((state) => state.handleNode.initialElements);
  const popUpState = useSelector((state) => state.handlePopUp.popUpState);
  const dispatch = useDispatch();

  return (
    <>
      <div style={{ height: "100vh", width: "100%" }}>
        <ReactFlow
          elements={elements}
          edgeTypes={edgeTypes}
          onLoad={onLoad}
          key="edge-with-button"
        ></ReactFlow>
      </div>
      <PopUp
        ContentComp={<OptionSelection />}
        isOpen={popUpState}
        closeFun={() => {
          dispatch({ type: "HANDLE_POP_UP", popUpState: false });
        }}
        isClosable={true}
      />
    </>
  );
};

export default Home;
