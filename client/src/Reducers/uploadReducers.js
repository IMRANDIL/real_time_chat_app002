import {
  UPLOAD_FAIL,
  UPLOAD_REQUEST,
  UPLOAD_SUCCESS,
} from "../Constants/UploadContant";

export const uploadReducer = (state = {}, action) => {
  switch (action.type) {
    case UPLOAD_REQUEST:
      return { ...state, loading: true };
    case UPLOAD_SUCCESS:
      return { loading: false, success: true, postInfo: action.payload };
    case UPLOAD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
