import React from 'react';
import PropTypes, { string } from 'prop-types';

import { MdSearch } from 'react-icons/md';
import { Content, Search } from './styles';

import Filter from '~/components/Filter';

export default function Header({ filters, setFilters, children }) {
  function changeFilters({ target }) {
    const newFilters = filters;

    if (target.checked) {
      newFilters.push(`${target.name}.${target.value}`);
    } else {
      const index = newFilters.indexOf(`${target.name}.${target.value}`);

      if (index > -1) {
        newFilters.splice(index, 1);
      }
    }

    setFilters(newFilters);
  }

  const filtersObject = [
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
        {filters}
        {filtersObject.map((filter, key) => (
          <Filter
            name={filter.name}
            options={filter.options}
            changeFilters={changeFilters}
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
  filters: PropTypes.arrayOf(string).isRequired,
  setFilters: PropTypes.oneOfType([PropTypes.func]).isRequired,
  children: PropTypes.element.isRequired,
};
