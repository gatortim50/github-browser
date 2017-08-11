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
  const request = axios.get(`${GITHUB_REPOS}`);
  return {
    type: FETCH_REPOS,
    payload: request
  };
}

export function fetchReposSuccess(repos) {
  return { type: FETCH_SUCCESS, payload: repos };
}

export function fetchReposFailure(error) {
  return { type: FETCH_FAILURE, payload: error };
}