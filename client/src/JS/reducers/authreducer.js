import {
  AUTHFAILED,
  LOADING,
  REGISTERSUCCESS,
} from "../actionTypes/actionTypes";

const initialState = {
  authloading: true,
  error: null,
  Alert: "",
};

export const authreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, authloading: true };
    case REGISTERSUCCESS:
      return { ...state, Alert: payload, authloading: false };
    case AUTHFAILED:
      return { ...state, error: payload, authloading: false };
    default:
      return state;
  }
};
