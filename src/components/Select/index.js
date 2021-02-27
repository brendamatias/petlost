import React from 'react';
import PropTypes from 'prop-types';

import { Label } from './styles';

export default function Select({ name, label, options, ...rest }) {
  return (
    <Label htmlFor={name}>
      <span>{label}</span>
      <select name={name} {...rest}>
        {options.map(option => (
          <option key={option.id} value={option.id}>
            {option.title}
          </option>
        ))}
      </select>
    </Label>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
