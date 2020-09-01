import React from 'react';
import './style.scss';
import Spin from 'antd/es/spin';
import { useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';

const ProgressTurn = () => {
  const loading = useSelector(state => state.progressReducer.loading);

  return (
    <Modal show={loading > 0} className="progress">
      <Spin size="large" />
    </Modal>
  )
}

export default React.memo(ProgressTurn);
