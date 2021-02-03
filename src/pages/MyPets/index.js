import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Content } from '~/styles/dashboard';

import Header from '~/components/Header';
import Button from '~/components/Button';
import Loading from '~/components/Loading';
import PetsList from '~/components/PetsList';
import Pagination from '~/components/Pagination';

import { api } from '~/services/api';

export default function MyPets() {
  const profile = useSelector(state => state.user.profile);

  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({});
  const [filters, setFilters] = useState([]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function loadPets() {
      try {
        setLoading(true);

        const { data } = await api.get(`pets`, {
          params: {
            page: 1,
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

        setPagination(data?.pagination);
        setPets(petsData);
        setLoading(false);
      } catch (err) {
        const { response } = err;

        toast.error(response.data.error?.message || 'Ocorreu um erro interno');
        setLoading(false);
      }
    }
    loadPets();
  }, [filters, profile.id]);

  return (
    <Container>
      <h1>meus pets</h1>
      {loading ? (
        <Loading />
      ) : (
        <Content>
          <div>
            <Header filters={filters} setFilters={setFilters}>
              <Button>
                <NavLink to="/my-pets">adicionar pet</NavLink>
              </Button>
            </Header>
            <PetsList pets={pets} />
          </div>
          <Pagination pagination={pagination} />
        </Content>
      )}
    </Container>
  );
}
