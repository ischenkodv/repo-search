import searchReducer from '../search';
import { searchRepoStarted, searchRepoSuccess, searchRepoFailure } from '../../actions/search';

describe('Search reducer', () => {

  it('Setting state when request started', () => {
    const testQuery = 'test';
    const initialState = {
      query: null,
      loading: false,
      repositories: null,
      error: false
    };
    const expectedState = {
      query: testQuery,
      loading: true,
      repositories: null,
      error: false
    };

    expect(
      searchReducer(initialState, searchRepoStarted(testQuery))
    ).toEqual(expectedState);
  });

  it('Setting state if request successful', () => {
    const testQuery = 'test';
    const repo1 = { name: 'repo1', html_url: 'http://example.com/repo1' };
    const repo2 = { name: 'repo2', html_url: 'http://example.com/repo2' };

    const initialState = {
      query: testQuery,
      loading: true,
      repositories: null,
      error: false
    };
    const expectedState = {
      query: testQuery,
      loading: false,
      repositories: [repo1, repo2],
      error: false
    };

    expect(
      searchReducer(initialState, searchRepoSuccess([repo1, repo2]))
    ).toEqual(expectedState);
  });

  it('Setting state if request failed', () => {
    const testQuery = 'test';
    const error = new Error('test error');

    const initialState = {
      query: testQuery,
      loading: true,
      repositories: null,
      error: false
    };
    const expectedState = {
      query: testQuery,
      loading: false,
      repositories: null,
      error: error
    };

    expect(
      searchReducer(initialState, searchRepoFailure(error))
    ).toEqual(expectedState);
  });
});
