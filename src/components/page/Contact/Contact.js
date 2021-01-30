import React from 'react';
import './style.scss';
import i18n from 'utils/i18n';

const Contact = (props) => {

  return (
    <div>
      <h3>Contact</h3>
      <h3>{i18n.IDS_HOT_APPS}</h3>
    </div>
  );
}

export default React.memo(Contact);
