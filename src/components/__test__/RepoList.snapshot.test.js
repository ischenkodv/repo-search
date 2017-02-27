import RepoList from '../RepoList';
import renderer from 'react-test-renderer';
import repositories from './repositories';
import React from 'react';

test('RepoList renders the list of repositories', () => {
  const rendered = renderer.create(
    <RepoList repositories={repositories} />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});
