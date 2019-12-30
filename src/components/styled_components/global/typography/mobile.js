import styled from 'styled-components';
import colors from '../../../../utils/colors';

const MainHeadingMobile = styled.h1`
  font-family: 'Monserrat', sans-serif;
  font-weight: bold;
  font-size: 40px;
  color: ${colors.main};
`;

const SubHeadingMobile = styled.h2`
  font-family: 'Monserrat', sans-serif;
  font-weight: normal;
  font-style: italic;
  font-size: 36px;
  color: ${colors.main};

  a {
    font-family: 'Monserrat', sans-serif;
    font-weight: normal;
    font-style: italic;
    font-size: 36px;
    color: ${colors.main};
  }
`;

const ParagraphMobile = styled.p`
  font-family: 'Monserrat', sans-serif;
  font-size: 18px;
  color: ${colors.white};
`;

export { MainHeadingMobile, SubHeadingMobile, ParagraphMobile };
