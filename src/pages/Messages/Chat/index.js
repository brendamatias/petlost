import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import {
  Container,
  Header,
  ChatContent,
  Scroll,
  UserMessages,
  NewMessage,
} from './styles';

import SecondaryLoading from '~/components/SecondaryLoading';

import { api, socket } from '~/services/api';

export default function Chat({ from, fromId, keyChat }) {
  const profile = useSelector(state => state.user.profile);

  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getMessages() {
      setLoading(true);

      const { data } = await api.get(`messages/${fromId}`);

      setMessages(data);

      setLoading(false);
    }

    async function loadChat() {
      socket.on('received', () => {
        getMessages();
      });

      getMessages();
    }

    loadChat();
  }, [fromId]);

  function handleSubmit() {
    const messageObject = {
      content: newMessage,
      key: keyChat,
      sender: profile.id,
      recipient: fromId,
    };

    socket.emit('sendMessage', messageObject);

    setMessages([...messages, messageObject]);

    setNewMessage('');
  }

  return (
    <Container>
      {loading ? (
        <SecondaryLoading top={25} right={25} />
      ) : (
        <>
          <Header>
            <strong>Pet Bolinha</strong>
            <span>From: {from}</span>
          </Header>
          <ChatContent>
            <Scroll>
              {messages.map((message, index) => (
                <UserMessages
                  key={index}
                  author={message.sender === profile.id ? 'author' : ''}
                >
                  <div>
                    <img
                      src="https://api.adorable.io/avatars/60/abott@adorable.png"
                      alt="Perfil"
                    />
                    <p>{message.content}</p>
                  </div>
                </UserMessages>
              ))}
            </Scroll>

            <NewMessage>
              <Form onSubmit={handleSubmit}>
                <Input
                  name="message"
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={event => setNewMessage(event.target.value)}
                />
                <button type="submit">Send</button>
              </Form>
            </NewMessage>
          </ChatContent>
        </>
      )}
    </Container>
  );
}

Chat.propTypes = {
  from: PropTypes.string.isRequired,
  fromId: PropTypes.number.isRequired,
  keyChat: PropTypes.string.isRequired,
};
