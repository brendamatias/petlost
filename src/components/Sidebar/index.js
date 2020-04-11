import React from 'react';
import { Link } from 'react-router-dom';
import { MdForum, MdPerson, MdPets, MdSettings } from 'react-icons/md';

import { Container, Profile } from './styles';

export default function Sidebar() {
  return (
    <Container>
      <div>
        <Profile>
          <img
            src="https://api.adorable.io/avatars/60/abott@adorable.png"
            alt="Perfil"
          />
          <div>
            <span>Brenda Matias</span>
            <p>brenda@gmail.com</p>
          </div>
        </Profile>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">
              <MdForum size={22} />
              Messages
            </Link>
          </li>
          <li>
            <Link to="/">
              <MdPerson size={22} />
              Profile
            </Link>
          </li>
          <li>
            <Link to="/">
              <MdPets size={22} />
              Registered Pets
            </Link>
          </li>
          <li>
            <Link to="/">
              <MdSettings size={22} />
              Settings
            </Link>
          </li>
        </ul>
      </div>

      <button type="submit">Logout</button>
    </Container>
  );
}
