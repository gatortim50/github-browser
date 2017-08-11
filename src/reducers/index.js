import { combineReducers } from 'redux'
import auth from './authReducer'
import githubRepos from './repoReducer'

const rootReducer = combineReducers({
  auth,
  githubRepos
});

export default rootReducer
