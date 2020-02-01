import styled from 'styled-components';
import Wrapper from '../styled_components/layout/Wrapper';

const IndexWrapper = styled(Wrapper)`
  position: absolute;
  bottom: ${props => props.position.bottom}px;
  left: ${props => props.position.left}px;
`;

export default IndexWrapper;
