import React from 'react';

import { MdLocationOn, MdFavorite } from 'react-icons/md';
import { Container, Content, TagsFilters, TagFilter } from './styles';

export default function Dashboard() {
  return (
    <Container>
      <h1>Dashboard</h1>

      <Content>
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
              <TagsFilters>
                <TagFilter color="#20BAA3">Adoption</TagFilter>
                <TagFilter color="#4501BD">Cats</TagFilter>
              </TagsFilters>
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
              <TagsFilters>
                <TagFilter color="#1066BD">Disappear</TagFilter>
                <TagFilter color="#C24F00">Dogs</TagFilter>
                <TagFilter color="#BA2929">Mating</TagFilter>
              </TagsFilters>
              <strong>Cebolinha</strong>
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
