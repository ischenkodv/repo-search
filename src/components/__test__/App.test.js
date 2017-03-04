import { App } from '../App';
import RepoList from '../RepoList';
import React from 'react';
import { mount, shallow } from 'enzyme';
import repositories from './repositories';

test('App renders user manual without query', () => {
  const wrapper = shallow(
    <App repositories={repositories} />
  );

  const helpElem = wrapper.find('.help-block');
  expect(helpElem.length).toEqual(1);
});

test('App renders user manual without repositories', () => {
  const wrapper = shallow(
    <App query={'test query'} />
  );

  const helpElem = wrapper.find('.help-block');
  expect(helpElem.length).toEqual(1);
});

test('App renders loading indicator', () => {
  const wrapper = shallow(
    <App loading={true} />
  );

  const loadingTxt = wrapper.find('.alert-info').text();
  expect(loadingTxt.indexOf('Loading') > -1).toEqual(true);
});

test('App renders error message', () => {
  const errorMsg = 'test error';
  const error = new Error(errorMsg);
  const wrapper = shallow(
    <App loading={false} error={ error } />
  );

  const errorElem = wrapper.find('.alert-danger');
  expect(errorElem.length).toEqual(1);
  expect(errorElem.text()).toEqual(errorMsg);
});

test('App renders empty repo message', () => {
  const testQuery = 'test query';
  const wrapper = shallow(
    <App repositories={[]} query={testQuery} />
  );

  const helpElem = wrapper.find('.help-block');
  expect(helpElem.length).toEqual(1);
  expect(helpElem.text().indexOf(testQuery) > -1).toEqual(true);
});

test('App renders repositories', () => {
  const testQuery = 'test query';
  const wrapper = shallow(
    <App query={testQuery} repositories={repositories} />
  );

  const repoListElem = wrapper.find(RepoList);
  expect(repoListElem.length).toEqual(1);
  const searchTitleElem = wrapper.find('.search-results h3');
  expect(searchTitleElem.length).toEqual(1);
});
