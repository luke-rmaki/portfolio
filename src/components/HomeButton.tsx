import React from 'react';
import styled from 'styled-components';

export const HomeButton = () => {
  function goHome() {
    // navigate(`/`);
    window.location.href = `/`;
  }
  return (
    <StyledHomeButton type="button" onClick={() => goHome()}>
      Home &lt;-
    </StyledHomeButton>
  );
};

const StyledHomeButton = styled.button`
  background: var(--purple);
  border: none;
  padding-inline: 20px;
  padding-block: 10px;
  font-size: 1.5rem;
  border-radius: 30px;
  width: 70vw;
  max-width: 300px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  color: var(--white);

  &:hover,
  &:focus {
    background: var(--accent);
    color: var(--black);
  }
`;
