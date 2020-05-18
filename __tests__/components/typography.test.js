import React from 'react';
import renderer from 'react-test-renderer';

import {
  MainHeading,
  Paragraph,
  Subheading,
} from '../../src/components/typography';

describe('MainHeading', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<MainHeading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Paragraph', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Paragraph />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Subheading', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Subheading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
