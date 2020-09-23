import React from 'react';
import { Provider } from 'react-redux';
import { ProgressTurn } from 'components';
import LocaleProvider from 'utils/providers/LocaleProvider';
import { useStore } from 'stores';

import 'swiper/css/swiper.css';
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'global/_mixins.scss';
import 'global/_styles.scss';

export default function App({ Component, pageProps }) {
  const store = useStore();
  return (
    <Provider store={store}>
      <LocaleProvider>
        <ProgressTurn />
        <Component {...pageProps}/>
      </LocaleProvider>
    </Provider>
  )
}