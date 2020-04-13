import styled from 'styled-components';

const Spacer = styled.div`
  width: ${props => `${props.widthMobile}px` || '100vw'};
  height: ${props => `${props.heightMobile}px` || '0px'};

  @media screen and (min-width: '800px'}) {
    width: ${props => `${props.widthDesktop}px` || '100vw'};
    height: ${props => `${props.heightDesktop}px` || '0px'};
  }
`;

export default Spacer;
