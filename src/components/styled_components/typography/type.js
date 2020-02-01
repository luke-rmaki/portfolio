import styled from 'styled-components';
import colors from '../../../utils/colors';
import mediaQueries from '../../../utils/mediaQueries';

const MainHeading = styled.h1`
  font-family: 'Monserrat', sans-serif;
  font-weight: bold;
  font-size: 40px;
  color: ${colors.main};
  ${mediaQueries.typography} {
    font-size: 48px;
  }
`;

const SubHeading = styled.h2`
  font-family: 'Monserrat', sans-serif;
  font-weight: normal;
  font-style: italic;
  font-size: 30px;
  color: ${colors.main};

  a {
    font-family: 'Monserrat', sans-serif;
    font-weight: normal;
    font-style: italic;
    font-size: 30px;
    color: ${colors.main};
    text-decoration: none;

    &:hover {
      color: ${colors.white};
    }
  }

  ${mediaQueries.typography} {
    font-size: 48px;

    a {
      font-size: 48px;
    }
  }
`;

const Paragraph = styled.p`
  font-family: 'Monserrat', sans-serif;
  font-size: 18px;
  color: ${colors.white};
  ${mediaQueries.typography} {
    font-size: 20px;
  }
`;

export { MainHeading, SubHeading, Paragraph };
