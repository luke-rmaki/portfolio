import React from 'react';

// Component imports
import { Form } from '../components/contact';
import { Layout } from '../components/global/Layout';
import { Menu } from '../components/global/Menu';
import { MainHeading } from '../components';

const Contact = (props) => {
  const { path }: { path: string } = props;

  return (
    <Layout title="Contact">
      <Menu path={path} />
      <MainHeading>Contact</MainHeading>
      <Form />
    </Layout>
  );
};

export default Contact;
