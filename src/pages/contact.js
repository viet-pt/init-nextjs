import React from 'react';
import { Contact } from 'components/page';
import { Layout } from 'components';

const contact = (props) => {
  return (
    <Layout>
        <Contact {...props} />
    </Layout>
  )
}

contact.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default contact;