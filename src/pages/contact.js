import React from 'react';
import { Contact } from 'components/PageComponents';
import { Layout } from 'components';

const contact = (props) => {
  return (
    <Layout>
        <Contact {...props} />
    </Layout>
  )
}

// contact.getInitialProps = async () => {
  
// }

export default React.memo(contact);