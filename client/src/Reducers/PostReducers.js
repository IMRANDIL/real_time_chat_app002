import {
  POST_FAILURE,
  POST_REQUEST,
  POST_SUCCESS,
  POST_RESET,
} from "../Constants/PostConstant";

export const postReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        postData: action.payload,
      };
    case POST_RESET:
      return {};
    case POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
