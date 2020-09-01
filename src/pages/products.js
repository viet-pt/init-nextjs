import React from 'react';
import { fetchListProduct } from './../api/products';
import { Products } from 'components/PageComponents';
import { Layout } from 'components/CommonComponents';
function products(props) {
  return (
    <Layout>
      <Products List={props[0]}></Products>
    </Layout>
  );
}
products.getInitialProps = async () => {
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
export default products;