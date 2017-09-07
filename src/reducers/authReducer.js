import {
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../config/constants";
const initialState = {
  user: [],
  isLoading: false,
  isLoggedIn: false,
  username: "",
  password: "",
  error: false
};

export default function authReducer(state = initialState, action) {
  console.log("AuthReducer action:", action.type);
  switch (action.type) {
    case LOGIN_USER:
      console.log("AuthReducer LOGIN_USER state:", state);
      return {
        ...state,
        isLoading: true,
        user: []
      };
    case LOGIN_SUCCESS:
      console.log("AuthReducer LOGIN_SUCCESS action.data:", action.data);
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.data
      };
    case LOGIN_FAILURE:
      console.log("AuthReducer LOGIN_FAILURE state:", state);
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: true
      };
    case LOGOUT:
      console.log("AuthReducer LOGOUT state:", initialState);
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        error: false
      };
    default:
      return state;
  }
}
