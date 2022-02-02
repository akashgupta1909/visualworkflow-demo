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
      {
        id: "2",
        type: "smsNode",
        data: { label: "Node 2" },
        position: { x: 0, y: 0 },
      },
      {
        id: "3",
        data: { label: "Node 3" },
        type: "selectorNode",
        position: { x: 0, y: 0 },
      },

      {
        id: "1-2",
        source: "1",
        target: "2",
        type: "buttonedge",
      },
      {
        id: "2-3",
        source: "2",
        target: "3",
        type: "smoothedge",
      },

      // {
      //   id: "2-3",
      //   source: "2",
      //   target: "3",
      //   type: "buttonedge",
      // },
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
