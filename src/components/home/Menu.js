import styled from 'styled-components';
import { Flex } from '../global/layout';

const Menu = styled(Flex)`
  /* position parent */
  position: absolute;
  bottom: 120px;

  /* position links */
  div {
    /* style links */
    a {
      color: var(--main);
      text-decoration: none;

      &:hover {
        color: var(--white);
      }
    }
  }
`;

export default Menu;
