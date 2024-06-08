export const SEARCH_MOVIES_REQUEST = 'SEARCH_MOVIES_REQUEST';
export const SEARCH_MOVIES_SUCCESS = 'SEARCH_MOVIES_SUCCESS';
export const SEARCH_MOVIES_FAILURE = 'SEARCH_MOVIES_FAILURE';

export const searchMoviesRequest = () => {
  return {
    type: SEARCH_MOVIES_REQUEST
  };
};

export const searchMoviesSuccess = (movies) => {
  return {
    type: SEARCH_MOVIES_SUCCESS,
    payload: movies
  };
};

export const searchMoviesFailure = (error) => {
  return {
    type: SEARCH_MOVIES_FAILURE,
    payload: error
  };
};