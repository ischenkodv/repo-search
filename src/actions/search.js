import { createAction } from 'redux-actions';
import { SEARCH_REPO_STARTED, SEARCH_REPO_SUCCESS, SEARCH_REPO_FAILURE } from '../constants';
import { RequestError } from '../errors';

// Fetch list of contacts
export const searchRepoStarted = createAction(SEARCH_REPO_STARTED, query => ({ query }));
export const searchRepoSuccess = createAction(SEARCH_REPO_SUCCESS, result => ({ result }));
export const searchRepoFailure = createAction(SEARCH_REPO_FAILURE);



export const search = (query) => {
  return function (dispatch) {
    dispatch(searchRepoStarted(query));

    return fetch(`https://api.github.com/users/${query}/repos`, {
      method: 'GET',
      headers: {
        'Accept': 'application/vnd.github.v3+json'
      }
    }).then((response) => {
      if (response.status === 200) {
        return response.json();
      } else if (response.status === 404) {
        throw new RequestError('User not found');
      } else {
        return response.json().then(data => {
          throw new RequestError(data.message);
        });
      }
    }).then(result => {
      dispatch(searchRepoSuccess(result));
    }).catch(error => {
      if (!(error instanceof RequestError)) {
        error = new Error('Error fetching repositories.');
      }
      dispatch(searchRepoFailure(error));
    });
  }
}
