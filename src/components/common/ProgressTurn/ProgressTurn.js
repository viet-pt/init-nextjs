import React from 'react';
import './style.scss';
import Spin from 'antd/es/spin';
import { useSelector } from 'react-redux';

const ProgressTurn = () => {
  const loading = useSelector(state => state.progressReducer.loading);
  
  if (loading > 0) {
    return (
      <div className="progress-turn">
        <Spin size="large" />
      </div>
    )
  } else {
    return null;
  }
}

export default React.memo(ProgressTurn);
