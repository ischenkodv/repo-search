import RepoList from '../RepoList';
import renderer from 'react-test-renderer';
import repositories from './repositories';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

test('RepoList renders the list of repositories', () => {
  const rendered = renderer.create(
    <MuiThemeProvider>
      <RepoList repositories={repositories} />
    </MuiThemeProvider>
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});
