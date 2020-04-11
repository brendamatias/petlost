import React from 'react';
import { MdSearch } from 'react-icons/md';
import {
  Container,
  Content,
  List,
  Search,
  Scroll,
  Preview,
  Chat,
  Info,
  ChatContent,
  UserMessage,
  NewMessage,
} from './styles';

export default function Messages() {
  return (
    <Container>
      <h1>Messages</h1>

      <Content>
        <List>
          <Search>
            <MdSearch color="#9D9CA1" size={26} />
            <input type="text" placeholder="Search" />
          </Search>
          <Scroll>
            <Preview>
              <img
                src="https://api.adorable.io/avatars/60/abott@adorable.png"
                alt="Perfil"
              />
              <div>
                <strong>Brenda Matias</strong>
                <span>Olá, tudo bem?</span>
              </div>
              <div>
                <h5>02 Fev</h5>
              </div>
            </Preview>
            <Preview>
              <img
                src="https://api.adorable.io/avatars/60/abott@adorable.png"
                alt="Perfil"
              />
              <div>
                <strong>Brenda Matias</strong>
                <span>Olá, tudo bem?</span>
              </div>
              <div>
                <h5>02 Fev</h5>
              </div>
            </Preview>
            <Preview>
              <img
                src="https://api.adorable.io/avatars/60/abott@adorable.png"
                alt="Perfil"
              />
              <div>
                <strong>Brenda Matias</strong>
                <span>Olá, tudo bem?</span>
              </div>
              <div>
                <h5>02 Fev</h5>
              </div>
            </Preview>
            <Preview>
              <img
                src="https://api.adorable.io/avatars/60/abott@adorable.png"
                alt="Perfil"
              />
              <div>
                <strong>Brenda Matias</strong>
                <span>Olá, tudo bem?</span>
              </div>
              <div>
                <h5>02 Fev</h5>
              </div>
            </Preview>
            <Preview>
              <img
                src="https://api.adorable.io/avatars/60/abott@adorable.png"
                alt="Perfil"
              />
              <div>
                <strong>Brenda Matias</strong>
                <span>Olá, tudo bem?</span>
              </div>
              <div>
                <h5>02 Fev</h5>
              </div>
            </Preview>
            <Preview>
              <img
                src="https://api.adorable.io/avatars/60/abott@adorable.png"
                alt="Perfil"
              />
              <div>
                <strong>Brenda Matias</strong>
                <span>Olá, tudo bem?</span>
              </div>
              <div>
                <h5>02 Fev</h5>
              </div>
            </Preview>
            <Preview>
              <img
                src="https://api.adorable.io/avatars/60/abott@adorable.png"
                alt="Perfil"
              />
              <div>
                <strong>Brenda Matias</strong>
                <span>Olá, tudo bem?</span>
              </div>
              <div>
                <h5>02 Fev</h5>
              </div>
            </Preview>
            <Preview>
              <img
                src="https://api.adorable.io/avatars/60/abott@adorable.png"
                alt="Perfil"
              />
              <div>
                <strong>Brenda Matias</strong>
                <span>Olá, tudo bem?</span>
              </div>
              <div>
                <h5>02 Fev</h5>
              </div>
            </Preview>
          </Scroll>
        </List>
        <Chat>
          <Info>
            <strong>Pet Bolinha</strong>
            <span>From: User Test</span>
          </Info>
          <ChatContent>
            <Scroll>
              <UserMessage>
                <div>
                  <img
                    src="https://api.adorable.io/avatars/60/abott@adorable.png"
                    alt="Perfil"
                  />
                  <span>10:05</span>
                </div>
                <div>
                  <p>Olá, tudo bem?</p>
                </div>
              </UserMessage>
              <UserMessage>
                <div>
                  <img
                    src="https://api.adorable.io/avatars/60/abott@adorable.png"
                    alt="Perfil"
                  />
                  <span>10:05</span>
                </div>
                <div>
                  <p>O cachorrinho que postou é meu!</p>
                </div>
              </UserMessage>
            </Scroll>

            <NewMessage>
              <input type="text" placeholder="Type a message..." />
            </NewMessage>
          </ChatContent>
        </Chat>
      </Content>
    </Container>
  );
}
