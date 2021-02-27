import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContent } from './styles';

export default function Button({ children, onClick, background }) {
  return (
    <ButtonContent type="button" onClick={onClick} background={background}>
      {children}
    </ButtonContent>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  onClick: PropTypes.oneOfType([PropTypes.func]).isRequired,
  background: PropTypes.string,
};

Button.defaultProps = {
  background: '',
};
