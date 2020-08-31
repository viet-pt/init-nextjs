import 'swiper/css/swiper.css';
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import createStore from './../store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps, store }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ToastContainer />
    </Provider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps({ ctx })
  }

  return { pageProps }
}
export default withRedux(createStore)(withReduxSaga(MyApp));