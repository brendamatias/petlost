import React, { useState } from 'react';
import { Form } from '@rocketseat/unform';

import { NavLink } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

import Input from '~/components/Input';
import Select from '~/components/Select';
import Textarea from '~/components/Textarea';
import ImageInput from '~/components/ImageInput';
import RadioButton from '~/components/RadioButton';

import { Container, Images } from './styles';

export default function AddPets() {
  const [firstImage, setFirstImage] = useState(null);
  const [secondImage, setSecondImage] = useState(null);
  const [thirdImage, setThirdImage] = useState(null);

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

      <Form>
        <Images>
          <ImageInput name="petImageFirst" setImage={setFirstImage} />
          <ImageInput name="petImageSecond" setImage={setSecondImage} />
          <ImageInput name="petImageThird" setImage={setThirdImage} />
        </Images>

        <Input name="name" label="nome do pet" />

        <div className="grid">
          <Select
            name="type"
            label="tipo"
            options={[
              { id: 'dog', title: 'cachorro' },
              { id: 'cat', title: 'gato' },
            ]}
          />

          <Select
            name="breed"
            label="raça"
            options={[
              { id: 'mating', title: 'acasalamento' },
              { id: 'adoption', title: 'adoção' },
              { id: 'disappeared', title: 'desaparecido' },
            ]}
          />
        </div>
        <Select
          name="situation"
          label="situação"
          options={[
            { id: 'mating', title: 'acasalamento' },
            { id: 'adoption', title: 'adoção' },
            { id: 'disappeared', title: 'desaparecido' },
          ]}
        />

        <div className="grid">
          <Input name="birth_date" label="data de nascimento" type="date" />
          <RadioButton
            name="gender"
            title="gênero"
            type="radio"
            options={[
              { name: 'female', label: 'Fêmea' },
              { name: 'male', label: 'Macho' },
            ]}
          />
        </div>

        <Textarea name="description" label="descrição" type="textarea" />

        <hr />

        <button type="submit">atualizar perfil</button>
      </Form>
    </Container>
  );
}
