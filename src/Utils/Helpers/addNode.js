import ReactFlow, {
  isNode,
  isEdge,
  removeElements,
  addEdge,
  getOutgoers,
  getIncomers,
  getConnectedEdges,
} from "react-flow-renderer";

const addNode = (initialElements, edgeId, type) => {
  let edge = null;
  let numberOfNodes = 0;
  for (let i = 0; i < initialElements.length; i++) {
    if (isNode(initialElements[i])) {
      numberOfNodes++;
    }
    if (edgeId == initialElements[i].id && isEdge(initialElements[i])) {
      edge = initialElements[i];
      break;
    }
  }
  if (edge) {
    initialElements.push({});
  }
  console.log(edge);
};

export default addNode;
