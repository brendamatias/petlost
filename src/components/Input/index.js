import React from 'react';
import PropTypes from 'prop-types';

import { Input as InputUnform } from '@rocketseat/unform';
import { Label } from './styles';

export default function Input({ name, label, ...rest }) {
  return (
    <Label htmlFor={name}>
      <span>{label}</span>
      <InputUnform name={name} {...rest} />
    </Label>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
