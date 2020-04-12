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

import { api, socket } from '~/services/api';

export default function Chat({ from, keyChat }) {
  const profile = useSelector(state => state.user.profile);

  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function getMessages() {
      const { data } = await api.get(`messages/${from}`);
      setMessages(data);
    }

    async function loadChat() {
      socket.on('received', () => {
        getMessages();
      });

      getMessages();
    }

    loadChat();
  }, [from]);

  function handleSubmit() {
    const messageObject = {
      content: newMessage,
      key: keyChat,
      sender: profile.id,
      recipient: from,
    };

    setMessages([...messages, messageObject]);

    socket.emit('sendMessage', messageObject);

    setNewMessage('');
  }

  return (
    <Container>
      <Header>
        <strong>Pet Bolinha</strong>
        <span>From: User Test</span>
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
    </Container>
  );
}

Chat.propTypes = {
  from: PropTypes.number.isRequired,
};

Chat.propTypes = {
  keyChat: PropTypes.string.isRequired,
};
