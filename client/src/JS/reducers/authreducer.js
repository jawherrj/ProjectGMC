import {
  AUTHFAILED,
  GETSUCCESS,
  LOADING,
  LOGINSUCCESS,
  REGISTERSUCCESS,
} from "../actionTypes/actionTypes";

const initialState = {
  authloading: true,
  error: null,
  Alert: "",
  currentUser: {},
  user: [],
  isAuth: false,
};

export const authreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, authloading: true };
    case REGISTERSUCCESS:
      return { ...state, Alert: payload, authloading: false };

    case LOGINSUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        Alert: payload.msg,
        user: payload.user,
        authloading: false,
      };
    case GETSUCCESS:
      // localStorage.setItem("token", payload.token);
      return {
        ...state,
        currentUser: payload,
        authloading: false,
        isAuth: true,
      };
    case AUTHFAILED:
      return { ...state, error: payload, authloading: false };
    default:
      return state;
  }
};
