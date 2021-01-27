import React, { useState, useEffect } from 'react';

import { MdLocationOn, MdFavorite } from 'react-icons/md';
import { Container, Content, TagsFilters, TagFilter } from './styles';

import MultiSelect from '~/components/MultiSelect';

import { api } from '~/services/api';

import noImage from '~/assets/no-image.png';

export default function Dashboard() {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState([]);
  const [pets, setPets] = useState([]);

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

  function onChangeFilters(values) {
    let filterParams = '';

    values.map(filter => {
      if (filter.value === 'dog' || filter.value === 'cat') {
        filterParams = `${filterParams}&type=${filter.value}`;
      } else {
        filterParams = `${filterParams}&situation=${filter.value}`;
      }
    });

    setFilters(filterParams ? `?${filterParams}` : '');
  }

  useEffect(() => {
    async function loadPets() {
      setLoading(true);

      const { data } = await api.get(`pets${filters}`, {
        params: {
          page,
        },
      });

      let petsData = [];

      if (data.data.length) {
        petsData = data.data.map(pet => ({
          ...pet,
          filters: [pet.situation, pet.type],
        }));
      }

      setPets(petsData);
      setLoading(false);
    }
    loadPets();
  }, [page, filters]);

  return (
    <Container>
      <h1>Pets</h1>
      <Content>
        <MultiSelect
          name="Tipo"
          options={[
            { label: 'Cachorro', value: 'dog' },
            { label: 'Gato', value: 'cat' },
          ]}
          onChange={onChangeFilters}
        />
        <ul>
          {loading ? (
            <h1>loading</h1>
          ) : (
            <>
              {pets.length > 0 ? (
                <>
                  {pets.map(pet => (
                    <li key={pet.id}>
                      <button type="submit">
                        <MdFavorite size={15} />
                      </button>
                      <img src={pet.files[0]?.url || noImage} alt="" />
                      <div>
                        <TagsFilters>
                          {pet.filters.map((filter, index) => (
                            <TagFilter key={index} color={returnColor(filter)}>
                              {returnTraduction(filter)}
                            </TagFilter>
                          ))}
                        </TagsFilters>
                        <strong>{pet.name}</strong>
                        <p>
                          <MdLocationOn color="#bb2929" size={18} />
                          {pet.address.city} - {pet.address.state}
                          <strong>(3.6 km)</strong>
                        </p>
                      </div>
                    </li>
                  ))}
                </>
              ) : (
                <h2>Ops, não temos pets cadastrados no momento</h2>
              )}
            </>
          )}
        </ul>
      </Content>
    </Container>
  );
}
