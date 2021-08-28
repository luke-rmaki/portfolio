import React from 'react';
import styled from 'styled-components';

import { BlogPreview } from './BlogPreview';
import { BlogOverviewData } from '../../utils/types';

type Props = {
  list: BlogOverviewData[`allMdx`][`edges`];
};
export const BlogList = (props: Props) => {
  const { list } = props;
  return (
    <BlogListWrapper>
      {list.map((edge) => (
        <BlogPreview
          key={edge.node.frontmatter.path}
          data-cy="blog-post"
          edge={edge}
        />
      ))}

      <hr />
    </BlogListWrapper>
  );
};

const BlogListWrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* @media (min-width: 1000px) { */
  /* padding: 0 100px; */
  /* } */
`;
