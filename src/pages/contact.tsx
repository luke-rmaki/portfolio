import React from 'react';

// Component imports
import { Form } from '../components/contact';
import { Layout, Menu } from '../components/global';
import { MainHeading } from '../components';

const Contact = (props) => {
  const { path }: { path: string } = props;

  return (
    <Layout>
      <Menu path={path} />
      <MainHeading>Contact</MainHeading>
      <Form />
    </Layout>
  );
};

export default Contact;
