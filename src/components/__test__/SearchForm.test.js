import SearchForm from '../SearchForm';
import React from 'react';
import { mount } from 'enzyme';

test('SearchForm calls onSubmit when form is submitted', () => {
  const onSubmit = jest.fn();
  const wrapper = mount(
    <SearchForm onSubmit={onSubmit} disabled={false} />
  );

  const p = wrapper.find('form');
  p.simulate('submit');
  expect(onSubmit).toBeCalled();
});

test('SearchForm do not call onSubmit if input is disabled', () => {
  const onSubmit = jest.fn();
  const wrapper = mount(
    <SearchForm onSubmit={onSubmit} disabled={true} />
  );

  const p = wrapper.find('form');
  p.simulate('submit');
  expect(onSubmit).not.toBeCalled();
});
