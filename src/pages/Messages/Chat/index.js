import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import openSocket from 'socket.io-client';

import {
  Container,
  Header,
  ChatContent,
  Scroll,
  UserMessages,
  NewMessage,
} from './styles';

import api from '~/services/api';

const socket = openSocket('https://petlost.herokuapp.com');

export default function Chat({ from }) {
  const profile = useSelector(state => state.user.profile);

  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);

  async function getMessages() {
    const { data } = await api.get(`messages/${2}`);

    setMessages(data);
    console.log(data);
  }

  useEffect(() => {
    async function loadChat() {
      socket.on('received', () => {
        getMessages();
      });

      getMessages();
    }

    loadChat();
  }, []);

  function handleSubmit() {
    const messageObject = {
      content: newMessage,
      key: 'teste',
      sender: profile.id,
      recipient: from,
    };

    getMessages();

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
          {messages.map(message => (
            <UserMessages
              key={message._id}
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
