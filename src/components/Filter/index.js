import React from 'react';
import PropTypes, { object } from 'prop-types';

import { Content } from './styles';

export default function Filter({ name, options, changeFilters }) {
  return (
    <Content>
      <span>{name}</span>
      <div className="options">
        {options.map((option, key) => (
          <label htmlFor={option.value} key={key}>
            <input
              type="checkbox"
              name={option.value}
              value={option.value}
              onClick={changeFilters}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </Content>
  );
}

Filter.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(object).isRequired,
  changeFilters: PropTypes.oneOfType([PropTypes.func]).isRequired,
};
