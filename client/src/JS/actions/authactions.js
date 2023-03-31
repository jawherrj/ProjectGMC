import {
  AUTHFAILED,
  GETSUCCESS,
  LOADING,
  LOGINSUCCESS,
  REGISTERSUCCESS,
} from "../actionTypes/actionTypes";
import axios from "axios";
/**
 * @methode post /auth/signup
 * @description register new user
 * @access public
 */
const baseurl = "http://localhost:5000";
export const register = (newUser, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  console.log(newUser);
  try {
    const { data } = await axios.post(`${baseurl}/auth/signup`, newUser);
    dispatch({ type: REGISTERSUCCESS, payload: data.msg });
    if (data.msg) {
      alert(data.msg);
    }
    navigate("/login");
  } catch (error) {
    dispatch({ type: AUTHFAILED, payload: error });
    console.log(error);
    if (error.response.data.errors) {
      error.response.data.errors.forEach((el) => alert(el.msg));
    }
    if (error.response.data.msg) {
      alert(error.response.data.msg);
    }
  }
};
/**
 * @methode POST /auth/
 * @description athentified user
 * @access private
 */
export const login = (user, navigate) => async (dispatch) => {
  dispatch({ type: LOADING });
  console.log(user);
  try {
    const { data } = await axios.post(`${baseurl}/auth/signin`, user);
    dispatch({ type: LOGINSUCCESS, payload: data });
    if (data.msg) {
      alert(data.msg);
    }
    navigate("/");
  } catch (error) {
    dispatch({ type: AUTHFAILED, payload: error });
    console.log(error);
    if (error.response.data.errors) {
      error.response.data.errors.forEach((el) => alert(el.msg));
    }
    if (error.response.data.msg) {
      alert(error.response.data.msg);
    }
  }
};
/**
 * @methode GET /auth/
 * @description athentified user
 * @access private
 */
export const getCurrentUser = () => async (dispatch) => {
  dispatch({ type: LOADING });
  const opts = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  try {
    const { data } = await axios.get(`${baseurl}/`, opts);
    dispatch({ type: GETSUCCESS, payload: data.user });
    if (data.msg) {
      alert(data.msg);
    }
  } catch (error) {
    dispatch({ type: AUTHFAILED, payload: error });
    console.log(error);

    if (error.response.data.msg) {
      alert(error.response.data.msg);
    }
  }
};
