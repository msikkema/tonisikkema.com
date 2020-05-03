import React, { FunctionComponent } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import ContentPanel from '../components/ContentPanel';
import Heading from '../components/Heading';
import { secondary } from '../styles/palette';

const ContactPage: FunctionComponent = () => (
  <Layout heading="CONTACT">
    <SEO title="Contact" />
    <ContentPanel>
      <Heading color={secondary.color}>Getting in Touch</Heading>

      
    </ContentPanel>
  </Layout>
);

export default ContactPage;