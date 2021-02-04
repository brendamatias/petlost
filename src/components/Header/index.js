import React from 'react';
import PropTypes from 'prop-types';

import { MdSearch } from 'react-icons/md';
import { Content, Search } from './styles';

import Filter from '~/components/Filter';

export default function Header({ filters, setFilters, children }) {
  const filtersObject = [
    {
      name: 'tipo',
      key: 'type',
      options: [
        { label: 'cachorro', value: 'dog' },
        { label: 'gato', value: 'cat' },
      ],
    },
    {
      name: 'situação',
      key: 'situation',
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
        {filtersObject.map((filter, key) => (
          <Filter
            name={filter.name}
            keyFilter={filter.key}
            options={filter.options}
            filters={filters}
            setFilters={setFilters}
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
  filters: PropTypes.string.isRequired,
  setFilters: PropTypes.oneOfType([PropTypes.func]).isRequired,
  children: PropTypes.element.isRequired,
};
