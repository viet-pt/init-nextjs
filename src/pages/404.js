import React from 'react';
import { NotFoundPage } from 'components/PageComponents';
import { Layout } from 'components';

const notfound = () => {
  return (
    <Layout title="404 - Page Not Found">
        <NotFoundPage />
    </Layout>
  )
}

export default (notfound);
