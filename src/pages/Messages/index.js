import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { MdSearch } from 'react-icons/md';
import { Container, Content, List, Search, Scroll } from './styles';

import Loading from '~/components/Loading';
import Chat from './Chat';
import ChatItem from './ChatItem';

import { socket } from '~/services/api';

export default function Messages() {
  const profile = useSelector(state => state.user.profile);
  const [chat, setChat] = useState({});
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadChat() {
      setLoading(true);

      console.log(socket.connected);
      if (!socket.connected) {
        socket.connect();
      }

      socket.emit('clientInfo', { id: profile.id });

      socket.on(`getChats:${profile.id}`, data => {
        setLoading(true);

        let currentUser = null;
        const chatsFormatted = data.map(currentChat => {
          currentUser =
            currentChat.sender.id === profile.id
              ? currentChat.pet.user
              : currentChat.sender;

          return {
            id: currentChat.id,
            pet_name: currentChat.pet.name,
            pet_avatar_url: currentChat.pet.files[0]?.url,
            user_name: currentUser.name,
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

    return function cleanup() {
      socket.disconnect();
    };
  }, [profile.id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Container>
          <h1>mensagens</h1>

          <Content>
            <List>
              <Search>
                <input type="text" placeholder="procurar" />
                <MdSearch color="#9D9CA1" size={26} />
              </Search>
              <Scroll>
                {chats.map((currentChat, index) => (
                  <ChatItem
                    key={index}
                    currentChat={currentChat}
                    changeChat={() => setChat(currentChat)}
                  />
                ))}
              </Scroll>
            </List>

            {chat.channel ? (
              <Chat
                channel={chat.channel}
                user_name={chat.user_name}
                pet_name={chat.pet_name}
                pet_avatar_url={chat.pet_avatar_url}
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
