import React from 'react';
import PropTypes, { object } from 'prop-types';
import Select from 'react-select';

import { Div } from './styles';

export default function MultiSelect({ name, options, onChange }) {
  return (
    <Div>
      <Select
        name={name}
        placeholder="Filtros"
        options={options}
        isMulti
        onChange={values => onChange(values)}
      />
    </Div>
  );
}

MultiSelect.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(object).isRequired,
  onChange: PropTypes.oneOfType([PropTypes.func]).isRequired,
};
