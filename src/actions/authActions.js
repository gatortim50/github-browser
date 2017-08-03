import { USERNAME, PASSWORD } from 'react-native-dotenv'
import {
  GITHUB_URL,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../config/constants";

import buffer from "buffer";

// login actions
//
export function loginUser(email, password) {

  // testing only using the .env values
  if (!email) {
    email = USERNAME
    password = PASSWORD
    console.log(`Using test data email: ${email}  password: ${password}`);
  }

  let b = new buffer.Buffer(email + ":" + password);
  let encodedAuth = b.toString("base64");

  console.log(`${GITHUB_URL}/user`, encodedAuth);
  return dispatch => {
  dispatch(getLogin());
  fetch("https://api.github.com/user", {
    headers: {
      Authorization: "Basic " + encodedAuth
    }
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
        //console.log("response:", response);
        return response;
      }
    })
    .then(response => {
      console.log("response.json:", response);
      return response.json();
    })
    .then(results => {
      dispatch(loginUserSuccess(results));
      //console.log("results:", results);
    })
    .catch(err => dispatch(loginUserFailure(err)));
  };
}

export const logout = () => {
  console.log("LOGOUT");
  return { type: 'LOGOUT' };
};

export const getLogin = () => {
  //console.log("LOGIN_USER");
  return { type: LOGIN_USER };
}

export const loginUserSuccess = (data) => {
  //console.log("LOGIN_SUCCESS", data);
  return { type: LOGIN_SUCCESS, data };
}

export const loginUserFailure = (error) => {
  console.log("LOGIN_FAILURE", error);
  return { type: LOGIN_FAILURE };
}
