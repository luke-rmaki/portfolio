import { Flex } from '../global/layout';
import styled from 'styled-components';

const ImageContentContainer = styled(Flex)`
  @media screen and (min-width: 800px) {
    flex-wrap: nowrap;
    align-items: center;
    flex-direction: row-reverse;
    padding: 5%;

    div:nth-child(2) {
      flex: 1 0 50%;
    }
  }
`;

export default ImageContentContainer;
