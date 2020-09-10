import React from 'react';

// Component imports
import Form from '../components/contact_form/Form';
import { Menu } from '../components/nav/';
import { Layout } from '../components/layout';
import { MainHeading } from '../components//typography';

const Contact = props => (
  <Layout>
    <Menu path={props.path} />
    <MainHeading
      initial={{
        rotateX: '90deg',
      }}
      animate={{
        rotateX: '0deg',
      }}
      transition={{
        duration: 0.5,
      }}
    >
      Contact
    </MainHeading>
    <Form />
  </Layout>
);

export default Contact;
