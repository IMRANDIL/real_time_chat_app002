import {
  POST_FAILURE,
  POST_REQUEST,
  POST_SUCCESS,
  POST_RESET,
  TIMELINE_POST_FAILURE,
  TIMELINE_POST_REQUEST,
  TIMELINE_POST_SUCCESS,
  TIMELINE_POST_RESET,
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

export const timelineReducer = (state = {}, action) => {
  switch (action.type) {
    case TIMELINE_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TIMELINE_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        timelinePost: action.payload,
      };
    case TIMELINE_POST_RESET:
      return {};
    case TIMELINE_POST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
