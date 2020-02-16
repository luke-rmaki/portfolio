import { Flex } from '../global/layout';
import styled from 'styled-components';

const ImageContentContainer = styled(Flex)`
  @media screen and (min-width: 700px) {
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row-reverse;
    padding: 5%;
  }
`;

export default ImageContentContainer;
