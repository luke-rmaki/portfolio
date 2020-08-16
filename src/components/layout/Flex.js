import styled from 'styled-components';

/**
 * widthMobile: defaults to 100%
 * widthDesktop: defaults to 100%
 * flex: defaults to 1
 */
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${props => props.widthMobile || '100%'};
  flex-wrap: wrap-reverse;

  > * {
    flex: ${props => props.flexMobile || '1 1 100vw'};
  }

  @media screen and (min-width: 800px) {
    width: ${props => props.widthDesktop || '100%'};
    flex-wrap: nowrap;
    align-items: center;
  }
`;

export default Flex;
