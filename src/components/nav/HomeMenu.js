import styled from 'styled-components';

const Menu = styled.div`
  /* position parent */
  display: flex;
  position: absolute;
  bottom: 120px;
  justify-content: space-between;
  width: 100%;
  flex-wrap: nowrap;

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
