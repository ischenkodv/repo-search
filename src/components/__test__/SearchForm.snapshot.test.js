import SearchForm from '../SearchForm';
import renderer from 'react-test-renderer';
import React from 'react';

test('SearchForm component renders the form correctly', () => {
  const fn = function() {};
  const rendered = renderer.create(
    <SearchForm onSubmit={fn} disabled={false} />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});

test('SearchForm can render the form with disabled search input', () => {
  const fn = function() {};
  const rendered = renderer.create(
    <SearchForm onSubmit={fn} disabled={true} />
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});
