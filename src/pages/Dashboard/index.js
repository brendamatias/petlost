import qs from 'qs';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

import { Container, Content } from '~/styles/dashboard';

import Header from '~/components/Header';
import Button from '~/components/Button';
import Loading from '~/components/Loading';
import PetsList from '~/components/PetsList';
import Pagination from '~/components/Pagination';

import { getPetsRequest } from '~/store/modules/pets/actions';

export default function Dashboard() {
  const dispatch = useDispatch();
  const pagination = useSelector(state => state.pets.pagination);
  const loading = useSelector(state => state.pets.loading);
  const pets = useSelector(state => state.pets.data);

  const [filters, setFilters] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadPets() {
      try {
        const filtersQsParse = qs.parse(filters, { delimiter: /[,]/ });

        dispatch(
          getPetsRequest({
            page,
            type: filtersQsParse.type,
            situation: filtersQsParse.situation,
          })
        );
      } catch (err) {
        const { response } = err;

        toast.error(
          response?.data?.error?.message || 'Ocorreu um erro interno'
        );
      }
    }
    loadPets();
  }, [dispatch, filters, page]);

  return (
    <Container>
      {loading && <Loading />}
      <h1>início</h1>
      <Content>
        <div>
          <Header filters={filters} setFilters={setFilters}>
            <Button>
              <NavLink to="/my-pets">adicionar pet</NavLink>
            </Button>
          </Header>
          <PetsList pets={pets} />
        </div>
        <Pagination
          page={page}
          setPage={setPage}
          lastPage={pagination.lastPage}
        />
      </Content>
    </Container>
  );
}
