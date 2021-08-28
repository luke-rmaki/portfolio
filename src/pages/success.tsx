import React from 'react';
import styled from 'styled-components';

// Component imports
import { Layout } from '../components/global/Layout';
import { Menu } from '../components/global/Menu';
import { Block } from '../components/Block';
import { HomeButton } from '../components/HomeButton';

const Success = (props) => {
  const { path }: { path: string } = props;

  return (
    <Layout title="Success">
      <Menu path={path} />
      <Wrapper>
        <Block>Thanks for your message. I'll be in contact soon.</Block>
        <HomeButton />
      </Wrapper>
    </Layout>
  );
};

export default Success;

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
