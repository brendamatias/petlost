import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContent } from './styles';

export default function Button({ children, onClick }) {
  return (
    <ButtonContent type="button" onClick={onClick}>
      {children}
    </ButtonContent>
  );
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.oneOfType([PropTypes.func]).isRequired,
};
