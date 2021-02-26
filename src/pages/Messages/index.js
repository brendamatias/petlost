import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdSearch } from 'react-icons/md';
import { Container, Content, List, Search, Scroll, Preview } from './styles';

import Loading from '~/components/Loading';
import Chat from './Chat';

import { api } from '~/services/api';

export default function Messages() {
  const profile = useSelector(state => state.user.profile);
  const [chats, setChats] = useState([]);
  const [fromId, setFromId] = useState('');
  const [from, setFrom] = useState('');
  const [loading, setLoading] = useState(true);

  // const formatDate = d => format(d, "dd ' de ' MMMM'", { locale: pt });

  async function changeChat(id) {
    try {
      console.log('oi');
      const { data } = await api.get(`users/${id}`);

      setFromId(data.data.id);
      setFrom(data.data.name);
      console.log(from);
    } catch (err) {
      const { response } = err;

      setFrom('');

      toast.error(
        response?.data?.error?.message || 'Oops, server error. Try again later.'
      );
    }
  }

  useEffect(() => {
    async function loadChat() {
      setLoading(true);

      const response = await api.get('messages');

      const data = await Promise.all(
        response.data.data.map(message => {
          return {
            ...message,
            from: message.name,
            fromId: message.id,
            // formattedDate: formatDate(parseISO(message.createdAt)),
          };
        })
      );

      setChats(data);
      setLoading(false);
    }

    loadChat();
  }, [profile.id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <h1>Messages</h1>

          <Content>
            <List>
              <Search>
                <input type="text" placeholder="Search" />
                <MdSearch color="#9D9CA1" size={26} />
              </Search>
              <Scroll>
                {chats.map(chat => (
                  <Preview key={chat.fromId}>
                    <img src={chat.avatar_url} alt="Perfil" />
                    <div>
                      <button
                        type="submit"
                        onClick={() => {
                          changeChat(chat.fromId, chat.key);
                        }}
                      >
                        <strong>{chat.from}</strong>
                        <p>oii</p>
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

            {from ? <Chat from={from} fromId={fromId} /> : ''}
          </Content>
        </Container>
      )}
    </>
  );
}
