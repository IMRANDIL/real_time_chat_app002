import {
  POST_FAILURE,
  POST_REQUEST,
  POST_SUCCESS,
} from "../Constants/PostConstant";

export const postAction = (postData) => async (dispatch) => {
  try {
    dispatch({ type: POST_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post("/post", postData, config);
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
