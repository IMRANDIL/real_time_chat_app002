import {
  SIGNUP_REQUEST,
  SIGNUP_FAIL,
  SIGNUP_SUCCESS,
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

    const { data } = await axios.post(
      "http://localhost:6000/auth/register",
      userData,
      config
    );

    dispatch({
      type: SIGNUP_SUCCESS,
      payload: data,
    });
  } catch (error) {}
};
