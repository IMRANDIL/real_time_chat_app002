import {
  POST_FAILURE,
  POST_REQUEST,
  POST_SUCCESS,
} from "../Constants/PostConstant";

export const postReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case POST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload,
      };
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
