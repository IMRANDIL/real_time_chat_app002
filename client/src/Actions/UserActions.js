import {
  USER_GET_FAILURE,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  //   USER_GET_RESET,
} from "../Constants/userConstants";
import axios from "axios";

export const getUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: USER_GET_REQUEST });
    const { data } = await axios.get(`http://localhost:5000/user/${id}`);
    dispatch({ type: USER_GET_SUCCESS, payload: data });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_GET_FAILURE,
      payload: error.response?.data.message
        ? error.response.data.message
        : error.response?.data
        ? error.response.data
        : error.message,
    });
  }
};
