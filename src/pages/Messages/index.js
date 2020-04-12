import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Content, List, Search, Scroll, Preview } from './styles';

import Chat from './Chat';

import api from '~/services/api';

export default function Messages() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    async function loadChat() {
      const { data } = await api.get('messages');

      // console.log(data);
      setChats(data);
    }

    loadChat();
  }, []);

  return (
    <Container>
      <h1>Messages</h1>

      <Content>
        <List>
          <Search>
            <MdSearch color="#9D9CA1" size={26} />
            <input type="text" placeholder="Search" />
          </Search>
          <Scroll>
            {chats.map(chat => (
              <Preview key={chat._id}>
                <img
                  src="https://api.adorable.io/avatars/60/abott@adorable.png"
                  alt="Perfil"
                />
                <div>
                  <strong>Brenda Matias</strong>
                  <span>Olá, tudo bem?</span>
                </div>
                <div>
                  <h5>02 Fev</h5>
                  <div className="notification">1</div>
                </div>
              </Preview>
            ))}
          </Scroll>
        </List>
        <Chat />
      </Content>
    </Container>
  );
}
