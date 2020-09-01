import React from 'react';
import { Contact } from 'components/PageComponents';
import { Layout } from 'components/CommonComponents';

function DescProducts(props) {
  return (
    <Layout>
      <Contact />
    </Layout>
  );
}

DescProducts.getInitialProps = async () => {
  try {
    let resultFetch = await fetchListProduct(1,);
    if (resultFetch?.data?.data) {
      let data = resultFetch.data.data;
      return [data];
    }
  } catch (error) {
    return error;
  }
}

export default React.memo(DescProducts);
