import React from 'react';
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import { ConfigProvider } from 'antd';

import enLocaleData from 'react-intl/locale-data/en';
import viLocaleData from 'react-intl/locale-data/vi';
import messages_en from '../translations/en';
import messages_vi from '../translations/vi';

// --------------antd----------------
import enUS from 'antd/es/locale/en_US';
import vi from 'antd/es/locale/vi_VN';

import moment from 'moment';

moment.locale('en-us');
// ---------------antd--------------

addLocaleData(enLocaleData);
addLocaleData(viLocaleData);

const messages = {
  'vi': messages_vi,
  'en-US': messages_en,
};

const antLocale = {
  'vi': vi,
  'en-US': enUS,
};

const LocaleComponent = ({ locale, children }) => {
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <ConfigProvider locale={antLocale[locale]}>
        {children}
      </ConfigProvider>
    </IntlProvider>
  );
};

export default connect(state => ({
  locale: state.language.locale
}), null)(LocaleComponent);
