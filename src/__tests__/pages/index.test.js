/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import index from '../../pages/index';

describe('index page', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<index />).toJSON();
    expect(tree).toMatchSnapshot;
  });
});
