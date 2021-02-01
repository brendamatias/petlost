import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

import { Container, Content } from './styles';

import Loading from '~/components/Loading';
import Header from '~/components/Header';
import Button from '~/components/Button';
import PetsList from '~/components/PetsList';

import { api } from '~/services/api';

export default function MyPets() {
  const profile = useSelector(state => state.user.profile);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function loadPets() {
      try {
        setLoading(true);
        setPage(1); // remover

        const { data } = await api.get(`pets${filters}`, {
          params: {
            page,
            user_id: profile.id,
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
      } catch (err) {
        const { response } = err;

        toast.error(response.data.error?.message || 'Ocorreu um erro interno');
        setLoading(false);
      }
    }
    loadPets();
  }, [page, filters, profile.id]);

  return (
    <Container>
      <h1>meus pets</h1>
      <Content>
        <Header>
          <Button>
            <NavLink to="/my-pets">adicionar pet</NavLink>
          </Button>
        </Header>
        <>
          {loading ? (
            <Loading />
          ) : (
            <>
              <PetsList pets={pets} />
            </>
          )}
        </>
      </Content>
    </Container>
  );
}
