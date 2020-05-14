import styled from 'styled-components';
import mediaQueries from '../../utils/mediaQueries';

const MainHeading = styled.h1`
  font-family: 'Fira Code', monospace;
  font-weight: bold;
  font-size: 40px;
  color: var(--main);
  ${mediaQueries.typography} {
    font-size: 48px;
  }
`;

export default MainHeading;
