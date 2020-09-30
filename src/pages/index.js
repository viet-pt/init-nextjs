import React from 'react';
import { Home } from 'components/PageComponents';
import { Layout } from 'components';

function Index(props) {
  return (
    <Layout>
        <Home {...props} />
    </Layout>
   )
}

export default Index;