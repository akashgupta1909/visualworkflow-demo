import { INITIAL_ELEMENTS } from "../ActionTypes";

export const handleNode = (
  state = {
    initialElements: [
      {
        id: "1",
        type: "input",
        data: { label: "Input 1" },
        position: { x: 0, y: 0 },
      },
      { id: "2", data: { label: "Node 2" }, position: { x: 0, y: 200 } },
      { id: "3", data: { label: "Node 3" }, position: { x: 0, y: 400 } },

      {
        id: "1",
        source: "1",
        target: "2",
        type: "buttonedge",
      },
      {
        id: "2",
        source: "2",
        target: "3",
        type: "buttonedge",
      },
    ],
  },
  action
) => {
  switch (action.type) {
    case INITIAL_ELEMENTS: {
      return {
        ...state,
        initialElements: action.initialElements,
      };
    }
    default:
      return state;
  }
};
