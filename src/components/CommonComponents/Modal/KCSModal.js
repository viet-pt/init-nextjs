import React from 'react';
import { Modal, Button } from 'antd';
import './style.scss';
import PropTypes from 'prop-types';

const KCSModal = ({ isOpenModal, title, content, closeButton, closeModal, confirmButton, confirmAction }) => {
  let btn = [
    <Button type="primary" onClick={confirmAction || closeModal}>{confirmButton || 'OK'}</Button>
  ]

  if (closeButton) {
    btn = [<Button onClick={closeModal}>{closeButton || 'Cancel'}</Button>, ...btn];
  }

  return (
    <Modal
      className="modal-wrapper"
      title={title || "Thông báo"}
      visible={isOpenModal}
      onCancel={closeModal}
      footer={btn}
    >
      {content}
    </Modal>
  );
};

KCSModal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  isOpenModal: PropTypes.bool.isRequired,
  closeButton: PropTypes.string,
  closeModal: PropTypes.func.isRequired,
  confirmButton: PropTypes.string,
  confirmAction: PropTypes.func,
};

KCSModal.defaultProps = {
  isOpenModal: false,
  closeModal: () => { },
};

export default React.memo(KCSModal);
