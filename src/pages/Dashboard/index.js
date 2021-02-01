import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Container, Content } from './styles';

import Loading from '~/components/Loading';
import Header from '~/components/Header';
import PetsList from '~/components/PetsList';

import { api } from '~/services/api';

export default function Dashboard() {
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
  }, [page, filters]);

  return (
    <Container>
      <h1>início</h1>
      <Content>
        <Header />
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
