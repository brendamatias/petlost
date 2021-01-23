import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  MdDashboard,
  MdForum,
  MdPerson,
  MdPets,
  MdArrowBack,
} from 'react-icons/md';

import { signOut } from '~/store/modules/auth/actions';

import { Container, Profile } from './styles';

import noImage from '~/assets/no-image.png';

export default function Sidebar() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <div>
        <Profile>
          <img src={profile?.avatar_url || noImage} alt="Perfil" />
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

      <button type="button" onClick={handleSignOut}>
        <MdArrowBack size={22} />
        Logout
      </button>
    </Container>
  );
}
