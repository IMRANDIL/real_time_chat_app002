import {
  USER_GET_FAILURE,
  USER_GET_REQUEST,
  USER_GET_SUCCESS,
  USER_UPDATE_FAILURE,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  FOLLOW_USER_REQUEST,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILURE,
  UNFOLLOW_USER_REQUEST,
  UNFOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_FAILURE,
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

export const updateUser = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: USER_UPDATE_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.put(
      `http://localhost:5000/user/${id}`,
      userData,
      config
    );
    dispatch({ type: USER_UPDATE_SUCCESS, payload: data });
    dispatch({ type: USER_GET_SUCCESS, payload: data });
    localStorage.setItem("user", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_UPDATE_FAILURE,
      payload: error.response?.data.message
        ? error.response.data.message
        : error.response?.data
        ? error.response.data
        : error.message,
    });
  }
};

export const followUser = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: FOLLOW_USER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.put(
      `http://localhost:5000/user/${id}/follow`,
      { userData },
      config
    );

    dispatch({ type: FOLLOW_USER_SUCCESS });
  } catch (error) {
    dispatch({
      type: FOLLOW_USER_FAILURE,
      payload: error.response?.data.message
        ? error.response.data.message
        : error.response?.data
        ? error.response.data
        : error.message,
    });
  }
};

export const unFollowUser = (id, userData) => async (dispatch) => {
  try {
    dispatch({ type: UNFOLLOW_USER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    await axios.put(
      `http://localhost:5000/user/${id}/unfollow`,
      { userData },
      config
    );
    dispatch({ type: UNFOLLOW_USER_SUCCESS });
  } catch (error) {
    dispatch({
      type: UNFOLLOW_USER_FAILURE,
      payload: error.response?.data.message
        ? error.response.data.message
        : error.response?.data
        ? error.response.data
        : error.message,
    });
  }
};
