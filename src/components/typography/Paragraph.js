import styled from 'styled-components';
import mediaQueries from '../../utils/mediaQueries';

const Paragraph = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  color: var(--white);
  ${mediaQueries.typography} {
    font-size: 20px;
  }
`;

export default Paragraph;
