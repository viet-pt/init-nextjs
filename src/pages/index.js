import React from 'react';
import Home from 'components/page/Home/Home';
import { Layout } from 'components';
function Homepage(props) {
  return (
    <Layout>
        <Home {...props} />
    </Layout>
   )
}

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['common'],
})

export default Homepage;