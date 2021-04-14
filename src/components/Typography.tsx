import styled from 'styled-components';

interface Props {
  color?: string;
  hover?: string;
}

export const MainHeading = styled.div<Props>`
  font-family: var(--font);
  font-weight: bold;
  font-size: var(--mainheading-size);
  color: ${(props) => (props.color ? `var(--${props.color})` : `var(--white)`)};
  padding: 150px 0 0 25px;
`;

export const SubHeading = styled.div<Props>`
  font-family: var(--font);
  font-weight: normal;
  font-style: italic;
  font-size: var(--subheading-size);
  color: ${(props) =>
    props.color ? `var(--${props.color})` : `var(--accent)`};

  a {
    font-family: var(--font);
    font-weight: normal;
    font-style: italic;
    font-size: var(--subheading-size);
    color: ${(props) =>
      props.color ? `var(--${props.color})` : `var(--accent)`};
    text-decoration: none;

    &:hover {
      color: ${(props) =>
        props.hover ? `var(--${props.hover})` : `var(--accent)`};
    }
  }
`;

export const Paragraph = styled.p<Props>`
  font-family: var(--font);
  font-size: var(--paragraph-size);
  color: var(--white);
`;

export const Highlight = styled.span<Props>`
  font-family: var(--font);
  font-size: var(--paragraph-size);
  color: var(--main);
`;
