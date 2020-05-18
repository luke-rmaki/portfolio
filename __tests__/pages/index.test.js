import React from 'react';
import renderer from 'react-test-renderer';

import index from '../../src/pages/index';

describe('index', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<index />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
