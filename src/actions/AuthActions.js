import { USERNAME, PASSWORD } from "react-native-dotenv";
import buffer from "buffer";
import {
  GITHUB_URL,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from "../config/constants";

// login actions
//
export function loginUser(email, password) {
  // testing only using the .env values
  if (!email) {
    //email = "squirrel";
    email = USERNAME;
    password = PASSWORD;
    console.log(`Using test data email: ${email}  password: ****`);
  } else {
    console.log(`Using real data email: ${email}  password: ****`);
  }

  let b = new buffer.Buffer(email + ":" + password);
  let encodedAuth = b.toString("base64");
  console.log(`${GITHUB_URL}/user`, encodedAuth);

  return dispatch => {
    dispatch(getLogin());
    fetch(`${GITHUB_URL}/user`, {
      headers: {
        Authorization: "Basic " + encodedAuth
      }
    })
      .then(response => {
        if (response.status >= 200 && response.status < 300) {
          console.log("response:", response);
          return response;
        } else {
          console.log("response:", response.status);
          return response;
        }
      })
      .then(response => {
        console.log("response.json:", response);
        if (response.status > 300) {
          const error = "Bad credentials";
          dispatch(loginUserFailure(error));
        } else {
          return response.json();
        }
      })
      .then(results => {
        console.log("results:", results);
        if (!results) {
          const error = "Bad credentials";
          dispatch(loginUserFailure(error));
        } else {
          dispatch(loginUserSuccess(results));
        }
      })
      .catch(err => dispatch(loginUserFailure(err)));
  };
}

export const logoutUser = () => {
  console.log("AuthAction LOGOUT");
  return { type: "LOGOUT" };
};

export const getLogin = () => {
  console.log("AuthAction LOGIN_USER");
  return { type: LOGIN_USER };
};

export const loginUserSuccess = data => {
  console.log("AuthAction LOGIN_SUCCESS", data);
  return { type: LOGIN_SUCCESS, data };
};

export const loginUserFailure = error => {
  console.log("AuthAction LOGIN_FAILURE", error);
  return { type: LOGIN_FAILURE };
};
