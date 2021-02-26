import React, { useState, useEffect, useRef } from 'react';
import { usePubNub } from 'pubnub-react';

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

export default function Chat({ from, fromId }) {
  const profile = useSelector(state => state.user.profile);

  const [start, setStart] = useState(0);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [channels] = useState([`43523fc6-3bfc-4988-9318-9b8c83f45e39_teste_1`]);

  const ps = useRef();
  const pubnub = usePubNub();
  const willMount = useRef(true);

  function formatTime(timetoken) {
    const rawTime = new Date(parseInt(timetoken, 10) / 1e4);

    const data = rawTime.toLocaleDateString('pt-br');
    const time = rawTime.toLocaleTimeString('pt-br', {
      hour: '2-digit',
      minute: '2-digit',
    });

    return `${data} - ${time}`;
  }

  function scrollToBottom() {
    const curr = ps.current;

    if (curr) {
      curr.scrollTop = curr.scrollHeight;
    }
  }

  function getHistory(scroll) {
    pubnub.history(
      {
        channel: channels,
        count: 20,
        start,
      },
      (status, response) => {
        if (response && response.messages.length) {
          const messagesFormatted = messages;

          response.messages.forEach(message => {
            messagesFormatted.unshift({
              ...message.entry,
              timetoken: message.timetoken,
            });
          });

          setMessages(messagesFormatted);
          setStart(response.startTimeToken);

          if (!scroll) {
            scrollToBottom();
          }
        }
      }
    );
  }

  if (willMount.current) {
    getHistory();

    willMount.current = false;
  }

  function handleMessage(event) {
    const { message, timetoken } = event;
    message.timetoken = timetoken;

    setMessages(data => [...data, message]);

    const curr = ps.current;

    if (curr) {
      curr.scrollTop = curr.scrollHeight;
    }
  }

  function handleSubmit({ message }) {
    if (message) {
      pubnub
        .publish({
          channel: channels[0],
          message: {
            sender_id: profile.id,
            type: 'txt',
            body: { content: message },
          },
        })
        .then(() => setNewMessage(''));
    }
  }

  function handleScroll(scrollTop) {
    if (scrollTop === 0) {
      getHistory(true);
    }
  }

  useEffect(() => {
    pubnub.addListener({ message: handleMessage });
    pubnub.subscribe({ channels });
  }, [channels, pubnub]);

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
            <Scroll
              containerRef={el => (ps.current = el)}
              onScrollY={container => handleScroll(container.scrollTop)}
            >
              {messages.map((message, index) => (
                <UserMessages
                  key={index}
                  author={message.sender_id === profile.id ? 'author' : ''}
                  time={formatTime(message.timetoken)}
                >
                  <div>
                    <img src={message.avatar_url} alt="Perfil" />
                    <p>{message?.body?.content}</p>
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
                <button type="submit">Enviar</button>
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
  fromId: PropTypes.string.isRequired,
};
