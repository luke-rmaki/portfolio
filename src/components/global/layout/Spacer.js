import styled from 'styled-components';

const Spacer = styled.div`
  width: ${props => `${props.widthMobile}px` || '0px'};
  height: ${props => `${props.heightMobile}px` || '0px'};

  @media screen and (min-width: ${props => `${props.breakpoint}px`}) {
    width: ${props => `${props.widthDesktop}px` || '0px'};
    height: ${props => `${props.heightDesktop}px` || '0px'};
  }
`;

export default Spacer;
