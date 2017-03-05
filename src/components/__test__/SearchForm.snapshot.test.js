import SearchForm from '../SearchForm';
import renderer from 'react-test-renderer';
import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

test('SearchForm component renders the form correctly', () => {
  const fn = function() {};
  const rendered = renderer.create(
    <MuiThemeProvider>
      <SearchForm onSubmit={fn} disabled={false} />
    </MuiThemeProvider>
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});

test('SearchForm can render the form with disabled search input', () => {
  const fn = function() {};
  const rendered = renderer.create(
    <MuiThemeProvider>
      <SearchForm onSubmit={fn} disabled={true} />
    </MuiThemeProvider>
  );
  expect(rendered.toJSON()).toMatchSnapshot();
});
