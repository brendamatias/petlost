import React from 'react';
import PropTypes from 'prop-types';

import { Select as SelectUnform } from '@rocketseat/unform';
import { Label } from './styles';

export default function Select({ name, label, options, ...rest }) {
  return (
    <Label htmlFor={name}>
      <span>{label}</span>
      <SelectUnform name={name} options={options} {...rest} />
    </Label>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
