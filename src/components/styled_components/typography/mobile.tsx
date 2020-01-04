import styled, { StyledComponent } from 'styled-components';
import colors from '../../../utils/colors';

const MainHeadingMobile: StyledComponent<'h1', any, {}, never> = styled.h1`
  font-family: 'Monserrat', sans-serif;
  font-weight: bold;
  font-size: 40px;
  color: ${colors.main};
`;

const SubHeadingMobile: StyledComponent<'h2', any, {}, never> = styled.h2`
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
    text-decoration: none;
  }
`;

const ParagraphMobile: StyledComponent<'p', any, {}, never> = styled.p`
  font-family: 'Monserrat', sans-serif;
  font-size: 18px;
  color: ${colors.white};
`;

export { MainHeadingMobile, SubHeadingMobile, ParagraphMobile };
