import React, { useState, useEffect } from 'react';

import { MdLocationOn, MdFavorite } from 'react-icons/md';
import { Container, Content, Filters, TagsFilters, TagFilter } from './styles';

import Filter from './Filter';

import { api } from '~/services/api';

import noImage from '~/assets/no-image.png';

export default function Dashboard() {
  const filtersData = ['adoption', 'cats', 'disappear', 'dogs', 'mating'];

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState('');
  const [pets, setPets] = useState([]);

  function returnColor(filter) {
    if (filter === 'dogs') return '#C24F00';
    if (filter === 'cats') return '#4501BD';
    if (filter === 'mating') return '#BA2929';
    if (filter === 'disappear') return '#1066BD';
    if (filter === 'adoption') return '#20BAA3';

    return '#000';
  }

  function changeFilters(filter) {
    console.log('filters');
    setFilters(`${filter},${filters}`);
  }

  useEffect(() => {
    async function loadLocations() {
      setLoading(true);

      const { data } = await api.get('pets', {
        params: {
          page,
        },
      });

      const petsData = data.map(pet => ({
        ...pet,
        filters: pet.filters.split(','),
      }));

      setPets(petsData);
      setLoading(false);
    }
    loadLocations();
  }, [page]);

  return (
    <Container>
      <h1>Dashboard</h1>

      <Content>
        <Filters>
          {filtersData.map((filter, index) => (
            <Filter
              key={index}
              content={filter}
              onClick={() => changeFilters(filter)}
            />
          ))}
        </Filters>
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
                      <img src={pet.files[0]?.file.url || noImage} alt="" />
                      <div>
                        <TagsFilters>
                          {pet.filters.map((filter, index) => (
                            <TagFilter key={index} color={returnColor(filter)}>
                              {filter}
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
