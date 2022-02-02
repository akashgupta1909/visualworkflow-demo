import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  isNode,
} from "react-flow-renderer";
import dagre from "dagre";

import styles from "./Home.module.css";
import ButtonEdge from "../../Components/ButtonEdge";
import PopUp from "./../../Components/PopUp";
import OptionSelection from "../../Components/OptionSelection";
import ButtonTypeNode from "../../Components/ButtonTypeNode";
import SmsTypeNode from "../../Components/SmsTypeNode";

// const onLoad = (reactFlowInstance) => reactFlowInstance.fitView();

const edgeTypes = {
  buttonedge: ButtonEdge,
};
const nodeTypes = {
  selectorNode: ButtonTypeNode,
  smsNode: SmsTypeNode,
};

const Home = () => {
  const dagreGraph = new dagre.graphlib.Graph();
  dagreGraph.setDefaultEdgeLabel(() => ({}));
  const nodeWidth = 150;
  const nodeHeight = 100;

  const elements = useSelector((state) => state.handleNode.initialElements);
  const popUpState = useSelector((state) => state.handlePopUp.popUpState);
  const componentToRender = useSelector(
    (state) => state.handlePopUp.componentToRender
  );
  const dispatch = useDispatch();

  useEffect(() => {
    onLayout("TB");
  }, []);

  const getLayoutedElements = (elements, direction = "TB") => {
    const isHorizontal = direction === "LR";
    dagreGraph.setGraph({ rankdir: direction });

    elements.forEach((el) => {
      if (isNode(el)) {
        dagreGraph.setNode(el.id, { width: nodeWidth, height: nodeHeight });
      } else {
        dagreGraph.setEdge(el.source, el.target);
      }
    });

    dagre.layout(dagreGraph);

    return elements.map((el) => {
      if (isNode(el)) {
        const nodeWithPosition = dagreGraph.node(el.id);
        el.targetPosition = isHorizontal ? "left" : "top";
        el.sourcePosition = isHorizontal ? "right" : "bottom";
        let element = document.getElementById(`${styles.ReactFlowWrapper}`);
        let elementWidth = element == null ? 0 : element.offsetWidth;

        el.position = {
          x:
            nodeWithPosition.x -
            nodeWidth +
            elementWidth / 2 +
            Math.random() / 1000,
          y: nodeWithPosition.y - nodeHeight / 2,
        };
      }

      return el;
    });
  };

  const layoutedElements = getLayoutedElements(elements);

  const [nodeElements, setElements] = useState(layoutedElements);
  const onLayout = useCallback(
    (direction) => {
      const layoutedElements = getLayoutedElements(elements, direction);
      setElements(layoutedElements);
    },
    [elements]
  );
  // console.log(typeof componentToRender);
  return (
    <>
      <div id={styles.ReactFlowWrapper}>
        <ReactFlowProvider>
          <ReactFlow
            elements={nodeElements}
            edgeTypes={edgeTypes}
            nodeTypes={nodeTypes}
            // onLoad={onLoad}
          ></ReactFlow>
          <div className="controls">
            <button id="LayoutButton" onClick={() => onLayout("TB")}>
              vertical layout
            </button>
            <button onClick={() => onLayout("LR")}>horizontal layout</button>
          </div>
        </ReactFlowProvider>
      </div>

      <PopUp
        ContentComp={componentToRender}
        isOpen={popUpState}
        closeFun={() => {
          dispatch({ type: "HANDLE_POP_UP", popUpState: false });
        }}
        isClosable={true}
        withBorder={false}
      />
    </>
  );
};

export default Home;
