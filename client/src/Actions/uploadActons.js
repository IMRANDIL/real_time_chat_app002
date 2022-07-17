import axios from "axios";
import {
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
  UPLOAD_FAIL,
} from "../Constants/UploadContant";

export const uploadImage = (uploadData) => async (dispatch) => {
  try {
    dispatch({
      type: UPLOAD_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const { data } = await axios.post("/upload/", uploadData, config);
    dispatch({
      type: UPLOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPLOAD_FAIL,
      payload: error.response?.data?.message
        ? error.response.data.message
        : error.response?.data
        ? error.response.data
        : error.message,
    });
  }
};
