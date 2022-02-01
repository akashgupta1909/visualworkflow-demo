import { HANDLE_POP_UP, HANDLE_EDGE_CLICK } from "../ActionTypes";

export const handlePopUp = (
  state = {
    popUpState: false,
    edgeId: "",
  },
  action
) => {
  switch (action.type) {
    case HANDLE_POP_UP: {
      return {
        ...state,
        popUpState: action.popUpState,
      };
    }
    case HANDLE_EDGE_CLICK: {
      return {
        ...state,
        edgeId: action.edgeId,
      };
    }
    default:
      return state;
  }
};
