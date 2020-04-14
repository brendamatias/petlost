import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { MdLocationOn, MdFavorite } from 'react-icons/md';
import { Container, Content, Filters, Tags, Tag } from './styles';

import Filter from './Filter';

import { api, socket } from '~/services/api';

export default function Dashboard() {
  const [adoption, setAdoption] = useState(false);
  const [cats, setCats] = useState(false);
  const [disappear, setDisappear] = useState(false);
  const [dogs, setDogs] = useState(false);
  const [mating, setMating] = useState(false);

  const profile = useSelector(state => state.user.profile);

  async function handleSubmit(id) {
    try {
      const { data } = await api.get(`keys/${id}`);

      const messageObject = {
        content: 'Oi, tudo bom?',
        key: data.key,
        sender: profile.id,
        recipient: id,
      };

      socket.emit('sendMessage', messageObject);

      toast.success('Message sent successfully!');
    } catch (err) {
      const { response } = err;

      toast.error(
        response.data.error || 'Oops, server error. Try again later.'
      );
    }
  }

  return (
    <Container>
      <h1>Dashboard</h1>

      <Content>
        <Filters>
          <Filter
            active={adoption}
            handleSubmit={() => {
              setAdoption(!adoption);
            }}
            content="Adoption"
          />
          <Filter
            active={cats}
            handleSubmit={() => {
              setCats(!cats);
            }}
            content="Cats"
          />
          <Filter
            active={disappear}
            handleSubmit={() => {
              setDisappear(!disappear);
            }}
            content="Disappear"
          />
          <Filter
            active={dogs}
            handleSubmit={() => {
              setDogs(!dogs);
            }}
            content="Dogs"
          />
          <Filter
            active={mating}
            handleSubmit={() => {
              setMating(!mating);
            }}
            content="Mating"
          />
        </Filters>

        <ul>
          <li>
            <button type="submit">
              <MdFavorite size={15} />
            </button>
            <img
              src="https://s2.glbimg.com/9rfjedp117RCh68P_rzWxcOQZUY=/e.glbimg.com/og/ed/f/original/2018/02/01/26907788_1614183255284072_4356465325754439623_n.jpg"
              alt=""
            />
            <div>
              <Tags>
                <Tag color="#20BAA3">Adoption</Tag>
                <Tag color="#4501BD">Cats</Tag>
              </Tags>
              <strong>Bolinha</strong>
              <p>
                <MdLocationOn color="#bb2929" size={18} />
                Recife - PE <strong>(3.6 km)</strong>
              </p>
            </div>
          </li>
          <li>
            <button type="submit">
              <MdFavorite size={15} />
            </button>
            <img
              src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/marnie-dog.jpg"
              alt=""
            />
            <div>
              <Tag color="#1066BD">Disappear</Tag>
              <Tag color="#BA2929">Dogs</Tag>
              <strong>Bolinha</strong>
              <p>
                <MdLocationOn color="#bb2929" size={18} />
                Recife - PE <strong>(3.6 km)</strong>
              </p>
            </div>
          </li>
          <li>
            <button type="submit">
              <MdFavorite size={15} />
            </button>
            <img
              src="https://s2.glbimg.com/9rfjedp117RCh68P_rzWxcOQZUY=/e.glbimg.com/og/ed/f/original/2018/02/01/26907788_1614183255284072_4356465325754439623_n.jpg"
              alt=""
            />
            <div>
              <Tags>
                <Tag color="#20BAA3">Adoption</Tag>
                <Tag color="#4501BD">Cats</Tag>
              </Tags>
              <strong>Bolinha</strong>
              <p>
                <MdLocationOn color="#bb2929" size={18} />
                Recife - PE <strong>(3.6 km)</strong>
              </p>
            </div>
          </li>
          <li>
            <button type="submit">
              <MdFavorite size={15} />
            </button>
            <img
              src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/marnie-dog.jpg"
              alt=""
            />
            <div>
              <Tag color="#1066BD">Disappear</Tag>
              <Tag color="#BA2929">Dogs</Tag>
              <strong>Bolinha</strong>
              <p>
                <MdLocationOn color="#bb2929" size={18} />
                Recife - PE <strong>(3.6 km)</strong>
              </p>
            </div>
          </li>
          <li>
            <button type="submit">
              <MdFavorite size={15} />
            </button>
            <img
              src="https://s2.glbimg.com/9rfjedp117RCh68P_rzWxcOQZUY=/e.glbimg.com/og/ed/f/original/2018/02/01/26907788_1614183255284072_4356465325754439623_n.jpg"
              alt=""
            />
            <div>
              <Tags>
                <Tag color="#20BAA3">Adoption</Tag>
                <Tag color="#4501BD">Cats</Tag>
              </Tags>
              <strong>Bolinha</strong>
              <p>
                <MdLocationOn color="#bb2929" size={18} />
                Recife - PE <strong>(3.6 km)</strong>
              </p>
            </div>
          </li>
          <li>
            <button type="submit">
              <MdFavorite size={15} />
            </button>
            <img
              src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/marnie-dog.jpg"
              alt=""
            />
            <div>
              <Tag color="#1066BD">Disappear</Tag>
              <Tag color="#BA2929">Dogs</Tag>
              <strong>Bolinha</strong>
              <p>
                <MdLocationOn color="#bb2929" size={18} />
                Recife - PE <strong>(3.6 km)</strong>
              </p>
            </div>
          </li>
          <li>
            <button type="submit">
              <MdFavorite size={15} />
            </button>
            <img
              src="https://s2.glbimg.com/9rfjedp117RCh68P_rzWxcOQZUY=/e.glbimg.com/og/ed/f/original/2018/02/01/26907788_1614183255284072_4356465325754439623_n.jpg"
              alt=""
            />
            <div>
              <Tags>
                <Tag color="#20BAA3">Adoption</Tag>
                <Tag color="#4501BD">Cats</Tag>
              </Tags>
              <strong>Bolinha</strong>
              <p>
                <MdLocationOn color="#bb2929" size={18} />
                Recife - PE <strong>(3.6 km)</strong>
              </p>
            </div>
          </li>
          <li>
            <button type="submit">
              <MdFavorite size={15} />
            </button>
            <img
              src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/marnie-dog.jpg"
              alt=""
            />
            <div>
              <Tag color="#1066BD">Disappear</Tag>
              <Tag color="#BA2929">Dogs</Tag>
              <strong>Bolinha</strong>
              <p>
                <MdLocationOn color="#bb2929" size={18} />
                Recife - PE <strong>(3.6 km)</strong>
              </p>
            </div>
          </li>
          <li>
            <button type="submit">
              <MdFavorite size={15} />
            </button>
            <img
              src="https://s2.glbimg.com/9rfjedp117RCh68P_rzWxcOQZUY=/e.glbimg.com/og/ed/f/original/2018/02/01/26907788_1614183255284072_4356465325754439623_n.jpg"
              alt=""
            />
            <div>
              <Tags>
                <Tag color="#20BAA3">Adoption</Tag>
                <Tag color="#4501BD">Cats</Tag>
              </Tags>
              <strong>Bolinha</strong>
              <p>
                <MdLocationOn color="#bb2929" size={18} />
                Recife - PE <strong>(3.6 km)</strong>
              </p>
            </div>
          </li>
          <li>
            <button type="submit">
              <MdFavorite size={15} />
            </button>
            <img
              src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/marnie-dog.jpg"
              alt=""
            />
            <div>
              <Tag color="#1066BD">Disappear</Tag>
              <Tag color="#BA2929">Dogs</Tag>
              <strong>Bolinha</strong>
              <p>
                <MdLocationOn color="#bb2929" size={18} />
                Recife - PE <strong>(3.6 km)</strong>
              </p>
            </div>
          </li>
          <li>
            <button type="submit">
              <MdFavorite size={15} />
            </button>
            <img
              src="https://s2.glbimg.com/9rfjedp117RCh68P_rzWxcOQZUY=/e.glbimg.com/og/ed/f/original/2018/02/01/26907788_1614183255284072_4356465325754439623_n.jpg"
              alt=""
            />
            <div>
              <Tags>
                <Tag color="#20BAA3">Adoption</Tag>
                <Tag color="#4501BD">Cats</Tag>
              </Tags>
              <strong>Bolinha</strong>
              <p>
                <MdLocationOn color="#bb2929" size={18} />
                Recife - PE <strong>(3.6 km)</strong>
              </p>
            </div>
          </li>
          <li>
            <button type="submit">
              <MdFavorite size={15} />
            </button>
            <img
              src="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2020/03/marnie-dog.jpg"
              alt=""
            />
            <div>
              <Tag color="#1066BD">Disappear</Tag>
              <Tag color="#BA2929">Dogs</Tag>
              <strong>Bolinha</strong>
              <p>
                <MdLocationOn color="#bb2929" size={18} />
                Recife - PE <strong>(3.6 km)</strong>
              </p>
            </div>
          </li>
        </ul>
      </Content>
    </Container>
  );
}
