import styled from 'styled-components';

const SubHeading = styled.h2`
  font-family: var(--font);
  font-weight: normal;
  font-style: italic;
  font-size: var(--subheading-size);
  color: ${props => (props.color ? `var(--${props.color})` : 'var(--main)')};

  a {
    font-family: var(--font);
    font-weight: normal;
    font-style: italic;
    font-size: var(--subheading-size);
    color: var(--main);
    text-decoration: none;

    &:hover {
      color: var(--main);
    }
  }
`;

export default SubHeading;
