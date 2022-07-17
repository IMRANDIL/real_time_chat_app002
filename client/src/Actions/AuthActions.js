import {
  SIGNUP_REQUEST,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
} from "../Constants/AuthConstant";

import axios from "axios";

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

    const { data } = await axios.post("/auth/register", userData, config);
    console.log(data);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    console.log(error);
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

    const { data } = await axios.post("/auth/login", userData, config);

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
