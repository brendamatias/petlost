import React from 'react';
import PropTypes from 'prop-types';

import { MdClose } from 'react-icons/md';
import { ModalContent } from './styles';

export default function Modal({ title, visible, setVisible, children }) {
  return (
    <ModalContent visible={visible}>
      <div>
        <div className="modal-header">
          <span>{title}</span>
          <button type="button" onClick={() => setVisible(false)}>
            <MdClose size={18} />
          </button>
        </div>
        <hr />
        <div className="modal-content">{children}</div>
      </div>
    </ModalContent>
  );
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};
