import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../search';
import { search, searchRepoStarted, searchRepoSuccess, searchRepoFailure } from '../search';
import { RequestError } from '../../errors';
import fetchMock from 'fetch-mock';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('Search actions', () => {

  afterEach(() => {
    fetchMock.restore();
  });

  it('Successfully fetch repositories', () => {
    const testQuery = 'testuser';
    const url = 'https://api.github.com/users/testuser/repos';

    const resp = [
      { name: 'repo1', html_url: 'http://example.com/repo1' },
      { name: 'repo2', html_url: 'http://example.com/repo2' }
    ];

    fetchMock.get(url, resp);

    const expectedActions = [
      searchRepoStarted(testQuery),
      searchRepoSuccess(resp)
    ];

    const state = {
      query: null,
      loading: false,
      repositories: null,
      error: false
    };

    const store = mockStore(state);

    return store.dispatch(actions.search(testQuery))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  });

  it('Failed to fetch repositories', () => {

    const testQuery = 'testuser';
    const url = 'https://api.github.com/users/testuser/repos';

    const resp = {
      body: { message: "Not Found" },
      status: 404
    };
    fetchMock.get(url, resp);

    const expectedActions = [
      searchRepoStarted(testQuery),
      searchRepoFailure(new RequestError('User not found'))
    ];

    const state = {
      query: null,
      loading: false,
      repositories: null,
      error: false
    };

    const store = mockStore(state);

    return store.dispatch(actions.search(testQuery))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      });
  });
});
