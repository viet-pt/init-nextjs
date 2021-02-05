import React, { useState } from 'react';
import './style.scss';
import Spin from 'antd/es/spin';
import Router from 'next/router';

const ProgressTurn = () => {
  const [loading, setLoading] = useState(false);

  Router.onRouteChangeStart = () => {
    setLoading(true);
  };
  
  Router.onRouteChangeComplete = () => {
    setLoading(false)
  };
  
  Router.onRouteChangeError = () => {
    setLoading(false)
  };

  if (!loading) {
    return null;
  }

  return (
    <div className="progress-turn">
      <Spin size="large" />
    </div>
  )
}

export default React.memo(ProgressTurn);
