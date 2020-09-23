import React from 'react';
import { SellCar } from 'components/PageComponents';
import { Layout } from 'components';

const sellcar = (props) => {
  return (
    <Layout>
        <SellCar {...props} />
    </Layout>
  )
}

export default React.memo(sellcar);

// export const getServerSideProps = async () => {
  
// }