import React from 'react';

import {
  Container,
  Header,
  ChatContent,
  Scroll,
  UserMessage,
  NewMessage,
} from './styles';

export default function Chat() {
  return (
    <Container>
      <Header>
        <strong>Pet Bolinha</strong>
        <span>From: User Test</span>
      </Header>
      <ChatContent>
        <Scroll>
          <UserMessage>
            <div>
              <img
                src="https://api.adorable.io/avatars/60/abott@adorable.png"
                alt="Perfil"
              />
              <p>Olá, tudo bem?</p>
            </div>
          </UserMessage>
          <UserMessage>
            <div>
              <img
                src="https://api.adorable.io/avatars/60/abott@adorable.png"
                alt="Perfil"
              />
              <p>Olá, tudo bem?</p>
            </div>
          </UserMessage>
          <UserMessage>
            <div>
              <img
                src="https://api.adorable.io/avatars/60/abott@adorable.png"
                alt="Perfil"
              />
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </UserMessage>
          <UserMessage>
            <div>
              <img
                src="https://api.adorable.io/avatars/60/abott@adorable.png"
                alt="Perfil"
              />
              <p>Olá, tudo bem?</p>
            </div>
          </UserMessage>
        </Scroll>

        <NewMessage>
          <input type="text" placeholder="Type a message..." />
          <button type="submit">Send</button>
        </NewMessage>
      </ChatContent>
    </Container>
  );
}
