import React, { useReducer } from 'react';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';

import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';

let githubClientId;
let githubClientSecret;

if (process.env.NODE_ENV !== 'production') {
  githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;

}


const GithubState = props => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();
    const res = await fetch(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    const data = await res.json();
    dispatch({
      type: SEARCH_USERS,
      payload: data.items
    }
    )
  }

  const getUser = async (username) => {
    setLoading();
    const res = await fetch(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    const data = await res.json();
    dispatch({
      type: GET_USER,
      payload: data
    })
  }

  const getUserRepos = async (username) => {
    setLoading();
    const res = await fetch(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&lient_id=${githubClientId}&client_secret=${githubClientSecret}`);
    const data = await res.json();
    dispatch({
      type: GET_REPOS,
      payload: data
    })
  }


  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  }


  const setLoading = () => dispatch({ type: SET_LOADING });


  return <GithubContext.Provider value={{
    users: state.users,
    user: state.user,
    loading: state.loading,
    repos: state.repos,
    searchUsers,
    clearUsers,
    getUser,
    getUserRepos
  }}>

    {props.children}
  </GithubContext.Provider>
}

export default GithubState;
