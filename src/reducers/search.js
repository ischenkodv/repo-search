import { handleActions } from 'redux-actions';
import { SEARCH_REPO_STARTED, SEARCH_REPO_SUCCESS, SEARCH_REPO_FAILURE } from '../constants';

const reducer = handleActions({

    SEARCH_REPO_STARTED: (state, action) => {
        return Object.assign({}, state, {
            query: action.payload.query,
            loading: true,
            repositories: null,
            error: false
        });
    },

    SEARCH_REPO_SUCCESS: (state, action) => {
        return Object.assign({}, state, {
            repositories: action.payload.result,
            loading: false,
            error: false
        });
    },

    SEARCH_REPO_FAILURE: (state, action) => {
        return Object.assign({}, state, {
            error: action.payload,
            loading: false,
            repositories: null
        });
    }

}, {
    query: null,
    loading: false,
    repositories: null,
    error: false
});

export default reducer;
