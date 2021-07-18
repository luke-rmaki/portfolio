import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

type StyledProps = {
  state: string;
};
const LogoWrapper = styled.div<StyledProps>`
  cursor: pointer;
  background: var(--purple-dark-6);
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transition: all 0.3s ease-in;
  box-shadow: ${(props) =>
    props.state === `MOBILE_DISPLAY`
      ? `0px 0px 0px black`
      : `2px 2px 4px var(--black-dark-1)`};

  &:hover {
    transform: scale(1.1);
    box-shadow: 4px 4px 6px var(--black-dark-1);
  }

  img {
    transition: all 0.5s ease-in;
    width: 70px;
    transform: ${(props) =>
      props.state === `MOBILE_DISPLAY` ? `scale(1.5)` : `scale(1)`};
  }
`;

type Props = {
  action: () => void;
  state: string;
};
export const Logo = (props: Props) => {
  const { action, state } = props;
  const data = useStaticQuery(graphql`
    query LogoQuery {
      file(relativePath: { eq: "logo.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <LogoWrapper state={state} id="logo" onClick={() => action()}>
      <img src={data.file.publicURL} alt="Logo" />
    </LogoWrapper>
  );
};
