import axios from 'axios';
import {
  GITHUB_REPOS,
  FETCH_REPOS,
  FETCH_SUCCESS,
  FETCH_FAILURE
} from "../config/constants";

// repo actions
//
const url = `${GITHUB_REPOS}`;

export function getUserRepos() {
  console.log(`github url: ${url}`);
  return dispatch => {
    dispatch(fetchRepos());
    fetch(url)
      .then(data => data.json())
      .then(json => {
        console.log("json:", json);
        dispatch(fetchReposSuccess(json.results));
      })
      .catch(err => dispatch(fetchReposFailure(err)));
  };
}

export function fetchRepos() {
  console.log("fetchRepos");
  return {
    type: FETCH_REPOS
  };
}

export function fetchReposSuccess(repos) {
  console.log("fetchReposSuccess", repos);
  return { type: FETCH_SUCCESS, payload: repos };
}

export function fetchReposFailure(error) {
  console.log("fetchReposFailure", error);
  return { type: FETCH_FAILURE, payload: error };
}