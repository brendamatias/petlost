import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContent } from './styles';

export default function Button({ children, type, onClick, background }) {
  return (
    <ButtonContent type={type} onClick={onClick} background={background}>
      {children}
    </ButtonContent>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  type: PropTypes.string,
  onClick: PropTypes.oneOfType([PropTypes.func]),
  background: PropTypes.string,
};

Button.defaultProps = {
  type: 'button',
  onClick: null,
  background: '',
};
