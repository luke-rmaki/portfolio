import React from 'react';

// Component imports
import Form from '../components/contact/Form';
import { Menu } from '../components/nav/';
import { Layout, Spacer } from '../components/layout';
import { MainHeading } from '../components//typography';
import { HeadingSpring } from '../components/springs';

const Contact = props => (
  <Layout>
    <Menu path={props.path} />
    <Spacer heightMobile={150} />
    <HeadingSpring>
      <MainHeading style={{ paddingLeft: '25px' }}>Contact</MainHeading>
    </HeadingSpring>
    <Form />
  </Layout>
);

export default Contact;
