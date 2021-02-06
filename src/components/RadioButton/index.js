import React from 'react';
import PropTypes from 'prop-types';

import { Input as InputUnform } from '@rocketseat/unform';
import { Container, Label } from './styles';

export default function RadioButton({ title, name, options }) {
  return (
    <Container>
      <span>{title}</span>
      <div>
        {options.map(option => (
          <Label htmlFor={name}>
            <InputUnform
              id={option.name}
              name={name}
              value={option.name}
              type="radio"
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
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
