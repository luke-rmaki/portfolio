import styled from 'styled-components';

const BlogListing = styled.div`
  position: relative;
  margin: 20px 0;

  div#excerpt {
    overflow: hidden;
    h2 {
      font-size: 2rem;
      padding-bottom: 20px;
    }
    p {
      font-size: 1rem;
    }
    background-color: rgba(211, 212, 244, 0.5);
    position: absolute;
    bottom: 0;
    height: 150px;
    color: var(--black);
    margin: auto;
    padding: 10px;
  }
`;

export default BlogListing;
