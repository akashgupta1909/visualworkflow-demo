import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from "react-flow-renderer";

import styles from "./Home.module.css";
import ButtonEdge from "../../Components/ButtonEdge";
import PopUp from "./../../Components/PopUp";

const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();
const initialElements = [
  {
    id: "node-1",
    type: "input",
    data: { label: "Input 1" },
    position: { x: 250, y: 0 },
  },
  { id: "node-2", data: { label: "Node 2" }, position: { x: 250, y: 200 } },

  {
    id: "edge-1-2",
    source: "node-1",
    target: "node-2",
    type: "buttonedge",
  },
];

const edgeTypes = {
  buttonedge: ButtonEdge,
};

const Home = () => {
  const [elements, setElements] = useState(initialElements);
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
        ContentComp={<></>}
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
