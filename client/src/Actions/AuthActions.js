import {
  SIGNUP_REQUEST,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_RESET,
  SIGNUP_RESET,
} from "../Constants/AuthConstant";

import axios from "axios";
import { USER_GET_RESET } from "../Constants/userConstants";
import { TIMELINE_POST_RESET } from "../Constants/PostConstant";

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: SIGNUP_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/auth/register",
      userData,
      config
    );

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
      payload: error.response?.data.message
        ? error.response.data.message
        : error.response?.data
        ? error.response.data
        : error.message,
    });
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({
      type: LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/auth/login",
      userData,
      config
    );

    dispatch({
      type: LOGIN_SUCCESS,
      payload: data,
    });
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response?.data.message
        ? error.response.data.message
        : error.response?.data
        ? error.response.data
        : error.message,
    });
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGIN_RESET,
  });
  dispatch({
    type: SIGNUP_RESET,
  });
  dispatch({
    type: USER_GET_RESET,
  });
  dispatch({
    type: TIMELINE_POST_RESET,
  });
  localStorage.removeItem("userInfo");
  localStorage.removeItem("user");
};
