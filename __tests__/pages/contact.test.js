import React from 'react';
import renderer from 'react-test-renderer';

import contact from '../../src/pages/index';

describe('contact', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<contact />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
