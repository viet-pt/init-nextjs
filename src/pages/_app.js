import React from 'react';
import { Provider } from 'react-redux';
import LocaleProvider from 'utils/providers/LocaleProvider';
import { useStore } from 'stores';
import { PersistGate } from 'redux-persist/integration/react';

import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'global/_mixins.scss';
import 'global/_styles.scss';

export default function App({ Component, pageProps }) {
  const { store, persistor } = useStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LocaleProvider>
          <Component {...pageProps} />
        </LocaleProvider>
      </PersistGate>
    </Provider>
  )
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps }
}