import React, { useState, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import { Form } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import { format, parseISO } from 'date-fns';

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import Modal from '~/components/Modal';
import Input from '~/components/Input';
import Select from '~/components/Select';
import Button from '~/components/Button';
import Loading from '~/components/Loading';
import Textarea from '~/components/Textarea';
import ImageInput from '~/components/ImageInput';
import RadioButton from '~/components/RadioButton';

import { Container, Images } from './styles';

import { api } from '~/services/api';

const formatDate = d => format(d, 'yyyy-MM-dd');

export default function Details({ history, match }) {
  const profile = useSelector(state => state.user.profile);

  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [edit, setEdit] = useState(false);
  const [breeds, setBreeds] = useState([]);

  const [message, setMessage] = useState('');
  const [firstImage, setFirstImage] = useState(null);
  const [secondImage, setSecondImage] = useState(null);
  const [thirdImage, setThirdImage] = useState(null);

  const [files, setFiles] = useState([]);
  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [breed, setBreed] = useState('');
  const [situation, setSituation] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [description, setDescription] = useState('');

  const id = useMemo(
    () => ({
      value: match.params.id,
    }),
    [match.params.id]
  );

  useEffect(() => {
    async function loadBreeds() {
      try {
        setLoading(true);
        const { data } = await api.get('/breeds', {
          params: {
            type: type || 'dog',
          },
        });

        const breedsFormatted = data.data.map(currentBreed => {
          return { id: currentBreed.id, title: currentBreed.name };
        });

        setBreeds(breedsFormatted);
        setLoading(false);
      } catch (err) {
        toast.error('Ocorreu um erro interno ao buscar as raças');
      }
    }

    loadBreeds();
  }, [type]);

  useEffect(() => {
    async function getPet() {
      const { data } = await api.get(`pets/${id.value}`);

      setFirstImage(data.data.files[0]?.url);
      setSecondImage(data.data.files[1]?.url);
      setThirdImage(data.data.files[2]?.url);

      setUserId(data.data.user_id);
      setFiles(data.data.files);
      setName(data.data.name);
      setType(data.data.type);
      setBreed(data.data.breed?.id);
      setSituation(data.data.situation);
      setState(data.data.state);
      setCity(data.data.city);
      setBirthDate(formatDate(parseISO(data.data.birth_date)));
      setGender(data.data.gender);
      setDescription(data.data.description);

      setLoading(false);
    }

    getPet();
  }, [id.value]);

  async function sendMessage(content) {
    try {
      await api.post('/chats', { message: content, pet_id: id.value });

      toast.success('Mensagem enviada com sucesso!');
      history.push('/messages');
    } catch (err) {
      const { response } = err;

      if (response && response.data) {
        if (response.data.errors) {
          for (let i = 0; i < response.data.errors.length; i++) {
            toast.error(
              `${response.data.errors[i].field} ${response.data.errors[i].message}`
            );
          }
        }
      } else {
        toast.error(
          response?.data?.error?.message || 'Ocorreu um erro interno'
        );
      }

      setLoading(false);
    }
  }

  return (
    <>
      {!loading ? (
        <>
          <Modal
            title="escreva uma mensagem"
            visible={modalVisible}
            setVisible={setModalVisible}
          >
            <>
              <Textarea
                name="message"
                label="mensagem"
                type="textarea"
                onChange={e => setMessage(e.target.value)}
                value={message}
              />
              <Button onClick={() => sendMessage(message)}>enviar</Button>
            </>
          </Modal>
          <Container>
            <div className="header">
              <div>
                <button
                  className="back-page"
                  type="button"
                  to="/my-pets"
                  onClick={() => {
                    history.goBack();
                  }}
                >
                  <MdArrowBack size={22} />
                </button>
                <div>
                  <h1>detalhes do pet</h1>
                </div>
              </div>

              {profile.id === userId ? (
                <Button
                  className={edit ? 'edit' : ''}
                  onClick={() => setEdit(!edit)}
                  background={!edit ? '#2A54DE' : ''}
                >
                  {edit ? 'cancelar' : 'editar pet'}
                </Button>
              ) : (
                <Button
                  background="#2A54DE"
                  onClick={() => setModalVisible(true)}
                >
                  enviar mensagem
                </Button>
              )}
            </div>

            <div className="content">
              {edit ? (
                <Images>
                  <ImageInput
                    name="petImageFirst"
                    image={firstImage}
                    setImage={setFirstImage}
                  />
                  <ImageInput
                    name="petImageSecond"
                    image={secondImage}
                    setImage={setSecondImage}
                  />
                  <ImageInput
                    name="petImageThird"
                    image={thirdImage}
                    setImage={setThirdImage}
                  />
                </Images>
              ) : (
                <AwesomeSlider>
                  {files?.map((file, index) => (
                    <div data-src={file.url} key={index} />
                  ))}
                </AwesomeSlider>
              )}

              <Form>
                <Input
                  name="name"
                  label="nome do pet"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  disabled={!edit}
                />
                <div className="grid">
                  <Select
                    name="type"
                    label="tipo"
                    options={[
                      { id: 'dog', title: 'cachorro' },
                      { id: 'cat', title: 'gato' },
                    ]}
                    value={type}
                    onChange={e => {
                      setType(e.target.value);
                    }}
                    disabled={!edit}
                  />

                  <Select
                    name="breed"
                    label="raça"
                    options={breeds}
                    value={breed}
                    disabled={!edit}
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
                  value={situation}
                  onChange={e => setSituation(e.target.value)}
                  disabled={!edit}
                />
                <Select
                  name="state"
                  label="estados"
                  options={[
                    { id: 'PE', title: 'Pernambuco' },
                    { id: 'PB', title: 'Paraiba' },
                  ]}
                  onChange={e => setState(e.target.value)}
                  value={state}
                  disabled={!edit}
                />
                <Select
                  name="city"
                  label="cidade"
                  options={[
                    { id: 'recife', title: 'Recife' },
                    { id: 'joao_pessoa', title: 'João pessoa' },
                  ]}
                  value={city}
                  onChange={e => setCity(e.target.value)}
                  disabled={!edit}
                />
                <div className="grid">
                  <Input
                    name="birth_date"
                    label="data de nascimento"
                    type="date"
                    value={birthDate}
                    onChange={e => setBirthDate(e.target.value)}
                    disabled={!edit}
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
                    disabled={!edit}
                  />
                </div>
                <Textarea
                  name="description"
                  label="descrição"
                  type="textarea"
                  onChange={e => setDescription(e.target.value)}
                  value={description}
                  disabled={!edit}
                />

                {edit && (
                  <>
                    <hr />
                    <button type="submit">
                      {loading ? 'carregando...' : 'editar pet'}
                    </button>
                  </>
                )}
              </Form>
            </div>
          </Container>
        </>
      ) : (
        <Loading>Carregando...</Loading>
      )}
    </>
  );
}

Details.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
