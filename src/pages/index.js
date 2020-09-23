import React from 'react';
import { Home } from 'components/PageComponents';
import { Layout } from 'components';
import { AdminService } from 'api/AdminService';

function Index(props) {
  return (
    <Layout>
        <Home {...props} />
    </Layout>
  )
}

export default Index;

export const getServerSideProps = async () => {
  const data = { 
    number: 3,
    start: 0,
    type: 2
  };
  const response = await AdminService.getNews(data);
  
  return {
    props: {
      response
    }
  }
}