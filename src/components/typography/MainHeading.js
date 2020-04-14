import styled from 'styled-components';
import mediaQueries from '../../utils/mediaQueries';

const MainHeading = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 40px;
  color: var(--main);
  ${mediaQueries.typography} {
    font-size: 48px;
  }
`;

export default MainHeading;
