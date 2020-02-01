import styled from 'styled-components';

const Wrapper = styled.div`
  grid-column: 1 / 13;
`;

const HeadingWrapper = styled(Wrapper)`
  h1 {
    margin: 150px 10px;
    @media screen and (min-width: 1500px) {
      margin: 200px 20px;
    }
  }
`;

const ImageWrapper = styled(Wrapper)`
  > div {
    transform: translateY(-50%);
  }
`;

const SocialMediaWrapper = styled(Wrapper)`
  text-align: left;
  margin-left: 10px;
`;

export { HeadingWrapper, ImageWrapper, SocialMediaWrapper };
