import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  MdDashboard,
  MdForum,
  MdPerson,
  MdPets,
  MdSettings,
} from 'react-icons/md';

import { Container, Profile } from './styles';

import noImage from '~/assets/no-image.png';

export default function Sidebar() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <div>
        <Profile>
          <img src={profile?.avatar?.url || noImage} alt="Perfil" />
          <div>
            <strong>{profile.name}</strong>
            <span>{profile.email}</span>
          </div>
        </Profile>
        <ul>
          <li>
            <NavLink to="/dashboard" activeClassName="active">
              <MdDashboard size={22} />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/messages" activeClassName="active">
              <MdForum size={22} />
              Messages
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" activeClassName="active">
              <MdPerson size={22} />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/registeredpets" activeClassName="active">
              <MdPets size={22} />
              Registered Pets
            </NavLink>
          </li>
        </ul>
      </div>

      <NavLink to="/profile" activeClassName="active">
        <MdSettings size={22} />
        Settings
      </NavLink>
    </Container>
  );
}
