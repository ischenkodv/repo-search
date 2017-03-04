import { App } from '../App';
import React from 'react';
import { mount } from 'enzyme';

test('App calls the search function when form submited', () => {
  const expectedQuery = 'test search query';
  const searchFunction = jest.fn();

  const wrapper = mount(
    <App search={searchFunction} loading={false} />
  );

  const p = wrapper.find('form');
  wrapper.find('form input').node.value = expectedQuery;
  p.simulate('submit');

  expect(searchFunction).toBeCalledWith(expectedQuery);
});

