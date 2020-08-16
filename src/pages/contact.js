import React from 'react';

// Component imports
import Form from '../components/contact_form/Form';
import { Menu } from '../components/nav/';
import { Layout } from '../components/layout';
import { MainHeading } from '../components//typography';
import { HeadingSpring } from '../components/springs';

const Contact = props => (
  <Layout>
    <Menu path={props.path} />
    <HeadingSpring>
      <MainHeading>Contact</MainHeading>
    </HeadingSpring>
    <Form />
  </Layout>
);

export default Contact;
