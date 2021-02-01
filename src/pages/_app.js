import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { ProgressTurn } from 'components';
import { useStore } from 'stores';
import { appWithTranslation, useTranslation } from 'utils/i18nconfig';

import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'global/_mixins.scss';
import 'global/_styles.scss';

function App({ Component, pageProps }) {
  // const { t } = useTranslation('common');

  // useEffect(() => {
  //   const handler = {
  //     get: function(target, prop) {
  //       return t(`${prop}`);
  //     }
  //   };
  //   window.i18n = new Proxy({}, handler);
  // }, []);

  const store = useStore();
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <ProgressTurn />
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

export default appWithTranslation(App);