import { createStore, combineReducers } from "redux";

import { handlePopUp } from "./Reducers/popup.reducer";

export const ConfigureStore = () => {
  const store = createStore(combineReducers({ handlePopUp }));

  return store;
};
