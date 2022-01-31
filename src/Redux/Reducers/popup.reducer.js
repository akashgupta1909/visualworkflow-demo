import { HANDLE_POP_UP } from "../ActionTypes";

export const handlePopUp = (
  state = {
    popUpState: true,
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
    default:
      return state;
  }
};
