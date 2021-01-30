import React from 'react';
import { SellCar } from 'components/page';
import { Layout } from 'components';

const sellcar = (props) => {
  return (
    <Layout>
        <SellCar {...props} />
    </Layout>
  )
}

// sellcar.getInitialProps = async () => {
  
// }

export default React.memo(sellcar);