import React from 'react';
import PropTypes from 'prop-types';

import { MdSearch } from 'react-icons/md';
import MultiSelect from '~/components/MultiSelect';
import { Content, Search } from './styles';

export default function Header({ children }) {
  const filters = [
    {
      name: 'tipo',
      options: [
        { label: 'cachorro', value: 'dog' },
        { label: 'gato', value: 'cat' },
      ],
    },
    {
      name: 'situação',
      options: [
        { label: 'adoção', value: 'adoption' },
        { label: 'desaparecido', value: 'disappeared' },
        { label: 'acasalamento', value: 'mating' },
      ],
    },
  ];

  return (
    <Content>
      <div>
        {filters.map((filter, key) => (
          <MultiSelect
            name={filter.name}
            options={filter.options}
            onChange={filter.onChange}
            key={key}
          />
        ))}
        <Search>
          <MdSearch size={22} color="#b1b1b1" />
          <input placeholder="pesquisar" />
        </Search>
      </div>

      <div>{children}</div>
    </Content>
  );
}

Header.propTypes = {
  children: PropTypes.element.isRequired,
};
