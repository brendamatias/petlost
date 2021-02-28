import React from 'react';
import PropTypes from 'prop-types';

import { Textarea as TextareaUnform } from '@rocketseat/unform';
import { Label } from './styles';

export default function Textarea({ name, label, value, ...rest }) {
  return (
    <Label htmlFor={name}>
      <span>{label}</span>
      <TextareaUnform name={name} value={value} {...rest} />
    </Label>
  );
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
