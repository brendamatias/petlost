import React from 'react';
import PropTypes, { object } from 'prop-types';

import { NavLink } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import { TagsFilters, TagFilter, Scroll } from './styles';

import noImage from '~/assets/no-image.png';

export default function PetList({ pets }) {
  function returnColor(filter) {
    if (filter === 'dog') return '#C24F00';
    if (filter === 'cat') return '#4501BD';
    if (filter === 'mating') return '#BA2929';
    if (filter === 'disappeared') return '#1066BD';
    if (filter === 'adoption') return '#20BAA3';

    return '#000';
  }

  function returnTraduction(filter) {
    if (filter === 'dog') return 'cachorro';
    if (filter === 'cat') return 'gato';
    if (filter === 'mating') return 'acasalamento';
    if (filter === 'disappeared') return 'desaparecido';
    if (filter === 'adoption') return 'adoção';

    return '';
  }

  return (
    <Scroll>
      {pets.length > 0 ? (
        <ul>
          {pets.map(pet => (
            <li key={pet.id}>
              <NavLink to={`details/${pet.id}`}>
                <img src={pet.files[0]?.url || noImage} alt="" />
              </NavLink>
              <div>
                <strong>{pet.name}</strong>
                <p>
                  <MdLocationOn color="#bb2929" size={18} />
                  {pet.city} - {pet.state}
                  <strong>(3.6 km)</strong>
                </p>
                <TagsFilters>
                  {pet.filters.map((filter, index) => (
                    <TagFilter key={index} color={returnColor(filter)}>
                      {returnTraduction(filter)}
                    </TagFilter>
                  ))}
                </TagsFilters>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="no-pets">
          {/* <h2>ops, você não tem pets cadastrados no momento</h2> */}
        </div>
      )}
    </Scroll>
  );
}

PetList.propTypes = {
  pets: PropTypes.arrayOf(object).isRequired,
};
