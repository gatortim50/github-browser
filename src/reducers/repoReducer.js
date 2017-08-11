import { FETCH_REPOS, FETCH_SUCCESS, FETCH_FAILURE } from "../config/constants";
const initialState = {
  repos: [],
  isLoading: false,
  error: false
};

export default function repoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_REPOS: // start fetching posts and set loading = true
      console.log("FETCH_REPOS state:", state);
      return { ...state, repos: [], error: null, isLoading: true };
    
    case FETCH_SUCCESS:
      console.log("FETCH_SUCCESS action.data:", action.data);
      return { ...state, isLoading: false, repos: action.data };

    case FETCH_FAILURE:
      console.log("FETCH_FAILURE state:", state);
      return { ...state, isLoading: false, error: true };

    default:
      console.log("default state:", state);
      return state;
  }
}
