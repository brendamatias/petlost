import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdSearch } from 'react-icons/md';
import { Container, Content, List, Search, Scroll, Preview } from './styles';

import Chat from './Chat';

import api from '~/services/api';

export default function Messages() {
  const profile = useSelector(state => state.user.profile);
  const [chats, setChats] = useState([]);
  const [from, setFrom] = useState();

  const [loading, setLoading] = useState(false);

  const formatDate = d => format(d, "dd ' de ' MMMM'", { locale: pt });

  function changeChat(id) {
    setFrom(id);
  }

  useEffect(() => {
    async function loadChat() {
      setLoading(true);

      const response = await api.get('messages');

      const data = await Promise.all(
        response.data.map(message => {
          const userFrom =
            message.sender === profile.id ? message.recipient : message.sender;

          return api.get(`users/${userFrom}`).then(user => {
            const fromUser = user.data;

            return {
              ...message,
              from: fromUser.name,
              fromId: fromUser.id,
              formattedDate: formatDate(parseISO(message.createdAt)),
            };
          });
        })
      );

      setChats(data);
      setLoading(false);
    }

    loadChat();
  }, [profile.id]);

  return (
    <Container>
      <h1>Messages</h1>

      {loading ? (
        ''
      ) : (
        <Content>
          <List>
            <Search>
              <input type="text" placeholder="Search" />
              <MdSearch color="#9D9CA1" size={26} />
            </Search>
            <Scroll>
              {chats.map(chat => (
                <Preview key={chat._id}>
                  <img
                    src="https://api.adorable.io/avatars/60/abott@adorable.png"
                    alt="Perfil"
                  />
                  <div>
                    <button
                      type="submit"
                      onClick={() => {
                        changeChat(chat.fromId);
                      }}
                    >
                      <strong>{chat.from}</strong>
                      <p>{chat.content}</p>
                    </button>
                  </div>
                  <div>
                    <div className="notification" />
                    <span>{chat.formattedDate}</span>
                  </div>
                </Preview>
              ))}
            </Scroll>
          </List>

          {from ? <Chat from={from} /> : ''}
        </Content>
      )}
    </Container>
  );
}
