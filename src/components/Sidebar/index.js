import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  MdDashboard,
  MdForum,
  MdPerson,
  MdPets,
  MdSettings,
} from 'react-icons/md';

import { Container, Profile } from './styles';

export default function Sidebar() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <div>
        <Profile>
          <img
            src="https://api.adorable.io/avatars/60/abott@adorable.png"
            alt="Perfil"
          />
          <div>
            <strong>{profile.name}</strong>
            <span>{profile.email}</span>
          </div>
        </Profile>
        <ul>
          <li>
            <Link to="/dashboard">
              <MdDashboard size={22} />
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/messages">
              <MdForum size={22} />
              Messages
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <MdPerson size={22} />
              Profile
            </Link>
          </li>
          <li>
            <Link to="/registeredpets">
              <MdPets size={22} />
              Registered Pets
            </Link>
          </li>
        </ul>
      </div>

      <Link to="/">
        <MdSettings size={22} />
        Settings
      </Link>
    </Container>
  );
}
