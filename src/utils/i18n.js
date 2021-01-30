import { useTranslation } from 'utils/i18nconfig';

const handler = {
  get: function (target, prop) {
    return useTranslation('common').t(`${prop}`);
  }
}

const i18n = new Proxy({}, handler);

export default i18n;