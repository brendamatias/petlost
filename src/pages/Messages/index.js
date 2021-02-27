import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { usePubNub } from 'pubnub-react';
import { toast } from 'react-toastify';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { MdSearch } from 'react-icons/md';
import { Container, Content, List, Search, Scroll, Preview } from './styles';

import Loading from '~/components/Loading';
import Chat from './Chat';

import { api, socket } from '~/services/api';

export default function Messages() {
  const profile = useSelector(state => state.user.profile);
  const [chat, setChat] = useState({});
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  const pubnub = usePubNub();

  // const formatDate = d => format(d, "dd ' de ' MMMM'", { locale: pt });

  function getLastMessage(channel) {
    return new Promise((resolve, reject) => {
      pubnub.fetchMessages(
        {
          channels: [channel],
          count: 1,
        },
        (status, response) => {
          if (status.error) {
            console.log(status);
            reject(response);
          } else {
            console.log(response);
            const { channels } = response;
            let result = null;

            if (Object.keys(channels).length) {
              const data = channels[`${channel}`][0];

              result = data.message;
            }

            resolve(result);
          }
        }
      );
    });
  }

  async function changeChat(id) {
    try {
      const { data } = await api.get(`users/${id}`);

      // setFromId(data.data.id);
      // setFrom(data.data.name);
      // console.log(from);
    } catch (err) {
      const { response } = err;

      // setFrom('');

      toast.error(
        response?.data?.error?.message || 'Oops, server error. Try again later.'
      );
    }
  }

  // useEffect(() => {
  //   const chatsWithLastMessage = chats.map(async currentChat => {
  //     return {
  //       last_message: await getLastMessage(currentChat.channel),
  //       ...currentChat,
  //     };
  //   });

  //   console.log(chatsWithLastMessage);
  // }, [chats, getLastMessage]);

  useEffect(() => {
    async function loadChat() {
      setLoading(true);
      socket.on('connect', () => {
        socket.emit('clientInfo', { id: profile.id });
      });

      socket.on(`getChats:${profile.id}`, data => {
        setLoading(true);

        const chatsFormatted = data.map(currentChat => {
          return {
            ...currentChat,
            channel: `channel.${currentChat.pet_id}.${currentChat.sender_id}`,
          };
        });

        setChats(chatsFormatted);
        setChat(chatsFormatted[0]);
        setLoading(false);
      });

      setLoading(false);
    }

    loadChat();
  }, [profile.id]);

  console.log(chat);
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
                {chats.map((currentChat, index) => (
                  <Preview key={index}>
                    <img src={currentChat.sender.avatar_url} alt="Perfil" />
                    <div>
                      <button
                        type="submit"
                        onClick={() => {
                          changeChat(currentChat.sender.id, currentChat.key);
                        }}
                      >
                        <strong>{currentChat.sender.name}</strong>
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

            {chat.channel ? (
              <Chat
                channel={chat.channel}
                sender={chat.sender.name}
                pet_name={chat.pet.name}
              />
            ) : (
              ''
            )}
          </Content>
        </Container>
      )}
    </>
  );
}
