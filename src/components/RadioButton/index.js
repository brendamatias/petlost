import React from 'react';
import PropTypes from 'prop-types';

import { Input as InputUnform } from '@rocketseat/unform';
import { Container, Label } from './styles';

export default function RadioButton({
  title,
  name,
  options,
  checked,
  ...rest
}) {
  return (
    <Container>
      <span>{title}</span>
      <div>
        {options.map(option => (
          <Label htmlFor={name} key={option.name}>
            <InputUnform
              id={option.name}
              name={name}
              value={option.name}
              checked={checked === option.name}
              type="radio"
              {...rest}
            />
            <span>{option.label}</span>
          </Label>
        ))}
      </div>
    </Container>
  );
}

RadioButton.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
