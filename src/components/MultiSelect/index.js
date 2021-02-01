import React from 'react';
import PropTypes, { object } from 'prop-types';

import { Content } from './styles';

export default function MultiSelect({ name, options }) {
  return (
    <Content>
      <span>{name}</span>
      <div className="options">
        {options.map((option, key) => (
          <label htmlFor={option.value} key={key}>
            <input type="checkbox" name={option.value} value={option.value} />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </Content>
  );
}

MultiSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(object).isRequired,
  // onChange: PropTypes.oneOfType([PropTypes.func]).isRequired,
};
