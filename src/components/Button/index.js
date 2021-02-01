import React from 'react';
import PropTypes from 'prop-types';

import { ButtonContent } from './styles';

export default function Button({ children, onChange }) {
  return (
    <ButtonContent type="button" onChange={onChange}>
      {children}
    </ButtonContent>
  );
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
  onChange: PropTypes.oneOfType([PropTypes.func]).isRequired,
};
