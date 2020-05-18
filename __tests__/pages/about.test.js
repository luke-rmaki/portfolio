import React from 'react';
import renderer from 'react-test-renderer';

import about from '../../src/pages/index';

describe('about', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<about />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
