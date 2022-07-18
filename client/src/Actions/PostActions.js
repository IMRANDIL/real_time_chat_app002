import {
  POST_FAILURE,
  POST_REQUEST,
  POST_SUCCESS,
  TIMELINE_POST_FAILURE,
  TIMELINE_POST_REQUEST,
  TIMELINE_POST_SUCCESS,
} from "../Constants/PostConstant";
import axios from "axios";

export const postAction = (postData) => async (dispatch) => {
  try {
    dispatch({ type: POST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/post",
      postData,
      config
    );
    dispatch({ type: POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: POST_FAILURE,
      payload: error.response?.data.message
        ? error.response.data.message
        : error.response?.data
        ? error.response.data
        : error.message,
    });
  }
};

export const getTimelinePosts = (userId) => async (dispatch) => {
  try {
    dispatch({ type: TIMELINE_POST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.get(
      `http://localhost:5000/post/${userId}/timeline`,
      config
    );
    dispatch({ type: TIMELINE_POST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: TIMELINE_POST_FAILURE,
      payload: error.response?.data.message
        ? error.response.data.message
        : error.response?.data
        ? error.response.data
        : error.message,
    });
  }
};
