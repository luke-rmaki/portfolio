import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${props => (props.width ? props.width : '100%')};
`;

export default Flex;
