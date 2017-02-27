import { App } from '../App';
import renderer from 'react-test-renderer';
import repositories from './repositories';
import React from 'react';

test('App shows form and empty list of repositories', () => {
  const rendered = renderer.create(
    <App />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});


test('App shows form with query', () => {
  const rendered = renderer.create(
    <App query={'repo name'} />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});
