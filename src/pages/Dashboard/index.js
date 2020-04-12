import React from 'react';
import { useSelector } from 'react-redux';
import bcrypt from 'bcryptjs';

// import { Container } from './styles';

import { socket } from '~/services/api';

export default function Dashboard() {
  const profile = useSelector(state => state.user.profile);

  async function handleSubmit(id) {
    // console.log(process.env.REACT_APP_API_KEY);
    const apiKey = process.env.REACT_APP_API_KEY;
    const secretText = profile.id + profile.name + profile.email + apiKey;

    const key = await bcrypt.hash(secretText, 8);

    const messageObject = {
      content: 'Oi, tudo bom?',
      key,
      sender: profile.id,
      recipient: id,
    };

    socket.emit('sendMessage', messageObject);
  }

  return (
    <ul>
      <li>
        Dog 1 perdido pelo user 2
        <button type="submit" onClick={() => handleSubmit(2)}>
          mandar mensagem
        </button>
      </li>
      <li>
        Dog 2 perdido pelo user 3
        <button type="submit" onClick={() => handleSubmit(3)}>
          mandar mensagem
        </button>
      </li>
      <li>
        Dog 2 perdido pelo user 4
        <button type="submit" onClick={() => handleSubmit(4)}>
          mandar mensagem
        </button>
      </li>
    </ul>
  );
}
