import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { loginUser, userSignup } from "./Reducers/AuthReducers";
import { uploadReducer } from "./Reducers/uploadReducers";

import { composeWithDevTools } from "redux-devtools-extension";
import {
  likeReducer,
  postReducer,
  timelineReducer,
} from "./Reducers/PostReducers";
import { followUser, getUser, unFollowUser } from "./Reducers/userReducers";

const rootReducer = combineReducers({
  registerUser: userSignup,
  loginUser: loginUser,
  uploadFile: uploadReducer,
  userPost: postReducer,
  timelinePost: timelineReducer,
  likePost: likeReducer,
  getUser: getUser,
  followUser: followUser,
  unFollowUser: unFollowUser,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const userFromStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};

const initialState = {
  registerUser: { userInfo: userInfoFromStorage },
  getUser: { user: userFromStorage },
};

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);
