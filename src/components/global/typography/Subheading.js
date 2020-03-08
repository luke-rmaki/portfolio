import styled from 'styled-components';
import mediaQueries from '../../../utils/mediaQueries';

const SubHeading = styled.h2`
  font-family: 'Monserrat', sans-serif;
  font-weight: normal;
  font-style: italic;
  font-size: 30px;
  color: ${props => (props.color ? `var(--${props.color})` : 'var(--main)')};

  a {
    font-family: 'Monserrat', sans-serif;
    font-weight: normal;
    font-style: italic;
    font-size: 30px;
    color: var(--main);
    text-decoration: none;

    &:hover {
      color: var(--main);
    }
  }

  ${mediaQueries.typography} {
    font-size: 48px;

    a {
      font-size: 48px;
    }
  }
`;

export default SubHeading;
