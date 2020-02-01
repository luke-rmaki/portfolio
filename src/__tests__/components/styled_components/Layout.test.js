/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import Layout from '../../../components/styled_components/layout/Layout';

describe('Layout', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <Layout>
          <h1>Test</h1>
        </Layout>
      )
      .toJSON();
    expect(tree).toMatchSnapshot;
  });
});
