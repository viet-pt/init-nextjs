import React from 'react';
import Contact from '../components/Contact/Contact';
import Header from '../components/CommonComponents/Header/Header';
import Footer from '../components/CommonComponents/Footer/Footer';
import HeaderTag from './../components/CommonComponents/HeaderTag/HeaderTag';
import fetchSendQuestionContact from '../api/question'
function DescProducts(props) {
    return (
        <React.Fragment>
             <HeaderTag />
            <Header></Header>
            <Contact></Contact>
            <Footer></Footer>
        </React.Fragment>
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
export default DescProducts;
