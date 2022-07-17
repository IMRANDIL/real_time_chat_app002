import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginUser, userSignup } from "./Reducers/AuthReducers";
import { uploadReducer } from "./Reducers/uploadReducers";

import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  registerUser: userSignup,
  loginUser: loginUser,
  uploadFile: uploadReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  registerUser: { userInfo: userInfoFromStorage },
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
