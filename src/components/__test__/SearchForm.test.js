import SearchForm from '../SearchForm';
import React from 'react';
import { mount } from 'enzyme';
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

test('SearchForm calls onSubmit when form is submitted', () => {
  const onSubmit = jest.fn();
  const wrapper = mount(
    <SearchForm onSubmit={onSubmit} disabled={false} />,
    {
      context: {
        muiTheme: getMuiTheme(),
      },
      childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
      }
    }
  );

  const p = wrapper.find('form');
  p.simulate('submit');
  expect(onSubmit).toBeCalled();
});

test('SearchForm do not call onSubmit if input is disabled', () => {
  const onSubmit = jest.fn();
  const wrapper = mount(
    <SearchForm onSubmit={onSubmit} disabled={true} />,
    {
      context: {
        muiTheme: getMuiTheme(),
      },
      childContextTypes: {
        muiTheme: React.PropTypes.object.isRequired,
      }
    }
  );

  const p = wrapper.find('form');
  p.simulate('submit');
  expect(onSubmit).not.toBeCalled();
});
