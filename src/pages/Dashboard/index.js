import React from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

// import { Container } from './styles';

import { api, socket } from '~/services/api';

export default function Dashboard() {
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
