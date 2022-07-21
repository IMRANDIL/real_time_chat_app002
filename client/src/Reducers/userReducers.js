import {
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_UPDATE_RESET,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_GET_FAILURE,
  USER_GET_RESET,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
  FOLLOW_USER_RESET,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAILURE,
  UNFOLLOW_USER_RESET,
} from "../Constants/userConstants";

export const getUser = (state = {}, action) => {
  switch (action.type) {
    case USER_GET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
      };
    case USER_GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_GET_RESET:
      return {};
    default:
      return state;
  }
};

export const userUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        user: action.payload,
      };
    case USER_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case USER_UPDATE_RESET:
      return {};
    default:
      return state;
  }
};

export const followUser = (state = {}, action) => {
  switch (action.type) {
    case FOLLOW_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FOLLOW_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case FOLLOW_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case FOLLOW_USER_RESET:
      return {};
    default:
      return state;
  }
};

export const unFollowUser = (state = {}, action) => {
  switch (action.type) {
    case UNFOLLOW_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UNFOLLOW_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
      };
    case UNFOLLOW_USER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case UNFOLLOW_USER_RESET:
      return {};
    default:
      return state;
  }
};
