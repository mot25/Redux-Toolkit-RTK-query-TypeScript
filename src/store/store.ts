import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/UserClice"
const rootReducer = combineReducers({
  userReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof setupStore>;
export type AppDispatch = AppState["dispatch"];
