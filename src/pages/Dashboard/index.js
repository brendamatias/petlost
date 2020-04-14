import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { MdLocationOn, MdFavorite } from 'react-icons/md';
import { Container, Content, Filters, Tags, Tag } from './styles';

import { api, socket } from '~/services/api';

export default function Dashboard() {
  const [adoption, setAdoption] = useState(false);
  const [cats, setCats] = useState(false);
  const [disappear, setDisappear] = useState(false);
  const [dogs, setDogs] = useState(false);
  const [mating, setMating] = useState(false);

  const profile = useSelector(state => state.user.profile);

  const pets = [
    {
      name: 'Bolinha',
      img:
        'https://s2.glbimg.com/9rfjedp117RCh68P_rzWxcOQZUY=/e.glbimg.com/og/ed/f/original/2018/02/01/26907788_1614183255284072_4356465325754439623_n.jpg',
      filters: ['Adoption', 'Cats'],
    },
    {
      name: 'Cebolinha',
      img:
        'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/marnie-dog.jpg"',
      filters: ['Adoption', 'Dogs'],
    },
    {
      name: 'Monica',
      img:
        'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/marnie-dog.jpg"',
      filters: ['Mating', 'Dogs'],
    },
    {
      name: 'Cascão',
      img:
        'https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/marnie-dog.jpg"',
      filters: ['Disappear', 'Dogs'],
    },
  ];

  function returnColor(filter) {
    if (filter === 'Adoption') {
      return '#20BAA3';
    }

    if (filter === 'Cats') {
      return '#4501BD';
    }

    if (filter === 'Disappear') {
      return '#1066BD';
    }

    if (filter === 'Dogs') {
      return '#C24F00';
    }

    return '#BA2929';
  }

  return (
    <Container>
      <h1>Dashboard</h1>

      <Content>
        <ul>
          {pets.map(pet => (
            <li key={pet.name}>
              <button type="submit">
                <MdFavorite size={15} />
              </button>
              <img src={pet.img} alt="" />
              <div>
                <Tags>
                  {pet.filters.map(filter => (
                    <Tag key={filter} color={returnColor(filter)}>
                      {filter}
                    </Tag>
                  ))}
                </Tags>
                <strong>{pet.name}</strong>
                <p>
                  <MdLocationOn color="#bb2929" size={18} />
                  Recife - PE <strong>(3.6 km)</strong>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Content>
    </Container>
  );
}
