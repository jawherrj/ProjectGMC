import {
  AUTHFAILED,
  LOADING,
  REGISTERSUCCESS,
} from "../actionTypes/ActionTypes";
import axios from "axios";
/**
 * @methode post /auth/signup
 * @description register new user
 * @access public
 */
const baseurl = "http://localhost:700";
export const register = (dispatch) => async (newuser, navigate) => {
  dispatch({ type: LOADING });
  try {
    const { data } = await axios.post(`${baseurl}/auth/signup`, newuser);
    dispatch({ type: REGISTERSUCCESS, payload: data.msg });
    if (data.msg) {
      alert(data.msg);
    }
    navigate("/signin");
  } catch (error) {
    dispatch({ AUTHFAILED, payload: error });
    console.log(error);
  }
};
