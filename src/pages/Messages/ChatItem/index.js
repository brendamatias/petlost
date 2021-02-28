import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { usePubNub } from 'pubnub-react';

import { Preview } from './styles';

export default function ChatItem({ currentChat, changeChat }) {
  const [chat, setChat] = useState({});

  useEffect(() => {
    setChat(currentChat);
  }, [currentChat]);

  function formatDate(date) {
    if (!date) return '-';

    let time = '';
    const msgtime = new Date(date / 1e4);
    const now = new Date();

    const delta = Math.abs(now - msgtime) / 1000;
    const days = Math.floor(delta / 86400);
    const hours = Math.floor(delta / 3600) % 24;
    const minutes = Math.floor(delta / 60) % 60;

    if (days) {
      time = `${days}d`;
    } else if (hours) {
      time = `${hours}h`;
    } else {
      time = `${minutes}m`;
    }

    return time;
  }

  function formatLastMessage(lastMessage) {
    return lastMessage?.length > 25
      ? `${lastMessage.slice(0, 25)}...`
      : lastMessage;
  }

  const pubnub = usePubNub();

  useEffect(() => {
    function getHistory() {
      return pubnub.history(
        {
          channel: [chat.channel],
          count: 1,
          stringifieldTimeToken: true,
        },
        (status, response) => {
          if (response && response.messages.length) {
            const { messages } = response;

            setChat({
              ...chat,
              last_message: messages[0].entry.body.content,
              last_message_date: messages[0].timetoken,
            });
          }
        }
      );
    }

    getHistory();
  }, [chat, pubnub]);

  return (
    <>
      {chat.id && (
        <Preview>
          <img src={chat.pet_avatar_url} alt="Perfil" />

          <div>
            <button
              type="submit"
              onClick={() => {
                changeChat(chat);
              }}
            >
              <strong className="title">{chat.pet_name}</strong>
              <hr />
              <div className="content">
                <strong>{chat.user_name}</strong>
                <div>
                  <p>{formatLastMessage(chat.last_message)}</p>

                  <div>
                    <div className="notification" />
                    <span>{formatDate(chat.last_message_date)}</span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </Preview>
      )}
    </>
  );
}

ChatItem.propTypes = {
  currentChat: PropTypes.objectOf(PropTypes.any).isRequired,
  changeChat: PropTypes.func.isRequired,
};
