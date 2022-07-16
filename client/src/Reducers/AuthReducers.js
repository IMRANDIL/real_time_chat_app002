import {
  SIGNUP_REQUEST,
  SIGNUP_FAIL,
  SIGNUP_RESET,
  SIGNUP_SUCCESS,
} from "../Constants/AuthConstant";

export const userSignup = (state = {}, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return { loading: true };
    case SIGNUP_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case SIGNUP_RESET:
      return {};
    case SIGNUP_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
