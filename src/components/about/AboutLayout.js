import styled from 'styled-components';

const AboutLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  h1 {
    place-self: flex-start;
    padding: 100px 0 30px 50px;
  }

  aside {
    padding: 0 0 150px 0;
  }
`;

export default AboutLayout;
