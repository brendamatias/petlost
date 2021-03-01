import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Form } from '@rocketseat/unform';

import { NavLink } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Select from '~/components/Select';
import Textarea from '~/components/Textarea';
import ImageInput from '~/components/ImageInput';
import RadioButton from '~/components/RadioButton';

import { Container, Images } from './styles';

import history from '~/services/history';
import { api } from '~/services/api';
import getError from '~/services/getError';

export default function AddPets() {
  const [breeds, setBreeds] = useState([]);
  const [type, setType] = useState('dog');

  const [firstImage, setFirstImage] = useState(null);
  const [secondImage, setSecondImage] = useState(null);
  const [thirdImage, setThirdImage] = useState(null);
  const [gender, setGender] = useState('');

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadBreeds() {
      try {
        const { data } = await api.get('/breeds', {
          params: {
            type,
          },
        });

        const breedsFormatted = data.data.map(breed => {
          return { id: breed.id, title: breed.name };
        });

        setBreeds(breedsFormatted);
      } catch (err) {
        toast.error('Ocorreu um erro interno ao buscar as raças');
      }
    }
    loadBreeds();
  }, [type]);

  async function handleSubmit(data) {
    try {
      setLoading(true);

      const formData = new FormData();

      formData.append('name', data.name);
      formData.append('type', data.type);
      formData.append('breed_id', data.breed);
      formData.append('gender', data.gender);
      formData.append('situation', data.situation);
      formData.append('birth_date', data.birth_date);
      formData.append('state', data.state);
      formData.append('city', data.city);
      formData.append('description', data.description);

      if (firstImage) {
        formData.append('file', firstImage);
      }

      if (secondImage) {
        formData.append('file', secondImage);
      }

      if (thirdImage) {
        formData.append('file', thirdImage);
      }

      await api.post('/pets', formData);

      toast.success('Pet cadastro com sucesso!');
      history.push('/my-pets');

      setLoading(false);
    } catch (err) {
      getError(err);

      setLoading(false);
    }
  }

  return (
    <Container>
      <div>
        <div>
          <NavLink to="/my-pets">
            <MdArrowBack size={22} />
          </NavLink>
        </div>
        <div>
          <h1>adicionar pet</h1>
        </div>
      </div>

      <Form onSubmit={handleSubmit}>
        <Images>
          <ImageInput name="petImageFirst" setImage={setFirstImage} />
          <ImageInput name="petImageSecond" setImage={setSecondImage} />
          <ImageInput name="petImageThird" setImage={setThirdImage} />
        </Images>
        <Input name="name" label="nome do pet" required />
        <div className="grid">
          <Select
            name="type"
            value={type}
            onChange={e => {
              setType(e.target.value);
            }}
            label="tipo"
            options={[
              { id: 'dog', title: 'cachorro' },
              { id: 'cat', title: 'gato' },
            ]}
            required
          />

          <Select name="breed" label="raça" options={breeds} required />
        </div>
        <Select
          name="situation"
          label="situação"
          options={[
            { id: 'mating', title: 'acasalamento' },
            { id: 'adoption', title: 'adoção' },
            { id: 'disappeared', title: 'desaparecido' },
          ]}
          required
        />
        <Select
          name="state"
          label="estados"
          options={[{ id: 'PB', title: 'Pernambuco' }]}
          required
        />
        <Select
          name="city"
          label="cidade"
          options={[{ id: 'recife', title: 'Recife' }]}
          required
        />
        <div className="grid">
          <Input
            name="birth_date"
            label="data de nascimento"
            type="date"
            required
          />
          <RadioButton
            name="gender"
            title="gênero"
            type="radio"
            options={[
              { name: 'female', label: 'Fêmea' },
              { name: 'male', label: 'Macho' },
            ]}
            checked={gender}
            onChange={e => setGender(e.target.value)}
            required
          />
        </div>
        <Textarea
          name="description"
          label="descrição"
          type="textarea"
          required
        />
        <hr />
        <Button type="submit" background="#bb2929">
          {loading ? 'carregando...' : 'adicionar pet'}
        </Button>
      </Form>
    </Container>
  );
}
