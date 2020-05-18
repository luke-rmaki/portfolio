import React from 'react';
import renderer from 'react-test-renderer';

import blog from '../../src/pages/index';

describe('blog', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<blog />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
