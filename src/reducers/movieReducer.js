import {
    SEARCH_MOVIES_REQUEST,
    SEARCH_MOVIES_SUCCESS,
    SEARCH_MOVIES_FAILURE
  } from '../actions/movieAction';
  
  const initialState = {
    loading: false,
    movies: [],
    error: ''
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_MOVIES_REQUEST:
        return {
          ...state,
          loading: true
        };
      case SEARCH_MOVIES_SUCCESS:
        return {
          loading: false,
          movies: action.payload,
          error: ''
        };
      case SEARCH_MOVIES_FAILURE:
        return {
          loading: false,
          movies: [],
          error: action.payload
        };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  