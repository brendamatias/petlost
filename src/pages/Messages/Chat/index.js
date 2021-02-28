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
import noImage from '~/assets/no-image.png';

export default function Chat({ channel, pet_name, pet_avatar_url, user_name }) {
  const profile = useSelector(state => state.user.profile);

  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(0);

  const ps = useRef();

  const pubnub = usePubNub();

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

  function getHistory(currentChannel, currentStart = 0, scroll) {
    if (!currentChannel) return;

    pubnub.history(
      {
        channel: [currentChannel],
        count: 20,
        start: currentStart,
      },
      (status, response) => {
        if (response && response.messages.length) {
          let messagesFormatted = [];

          response.messages.forEach(message => {
            if (scroll) {
              messagesFormatted = messages;

              messagesFormatted.unshift({
                ...message.entry,
                timetoken: message.timetoken,
              });
            } else {
              messagesFormatted.push({
                ...message.entry,
                timetoken: message.timetoken,
              });
            }
          });

          setMessages(messagesFormatted);
          setStart(response.startTimeToken);

          if (!scroll) {
            scrollToBottom();
          } else if (ps.current) {
            ps.current.scrollTop = 200;
          }
        } else {
          setMessages([]);
        }
      }
    );
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
          channel: [channel],
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
    if (scrollTop === 0 && messages.length === 20) {
      getHistory(channel, start, true);
    }
  }

  useEffect(() => {
    pubnub.addListener({ message: handleMessage });
  }, [pubnub]);

  useEffect(() => {
    pubnub.unsubscribeAll();
    pubnub.subscribe({ channels: [channel] });

    getHistory(channel, 0, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel, pubnub]);

  return (
    <Container>
      {loading ? (
        <SecondaryLoading top={25} right={25} />
      ) : (
        <>
          <Header>
            <strong>{pet_name}</strong>
            <span>de: {user_name}</span>
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
                    <img src={pet_avatar_url || noImage} alt="Perfil" />
                    <div className="message-content">
                      <p>{message?.body?.content}</p>
                      <span>{formatTime(message.timetoken)}</span>
                    </div>
                  </div>
                </UserMessages>
              ))}
            </Scroll>
            <NewMessage>
              <Form onSubmit={handleSubmit}>
                <Input
                  name="message"
                  type="text"
                  placeholder="digite uma mensagem..."
                  value={newMessage}
                  onChange={event => setNewMessage(event.target.value)}
                />
                <button type="submit">enviar</button>
              </Form>
            </NewMessage>
          </ChatContent>
        </>
      )}
    </Container>
  );
}

Chat.propTypes = {
  channel: PropTypes.string.isRequired,
  pet_name: PropTypes.string.isRequired,
  pet_avatar_url: PropTypes.string,
  user_name: PropTypes.string.isRequired,
};

Chat.defaultProps = {
  pet_avatar_url: '',
};
