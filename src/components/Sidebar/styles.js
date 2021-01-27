import styled from 'styled-components';

export const Container = styled.div`
  background: ${props =>
    `linear-gradient(645deg, ${props.theme.colors.secundary}, ${props.theme.colors.primary})`};
  /* background: #e41320; */
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  ul {
    li {
      padding: 24px 0;
    }
  }

  button {
    background: none;
    border: 0;
  }

  a,
  button {
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.light};
    font-size: 16px;
    font-weight: 600;
    transition: opacity 0.2s;
    opacity: 0.6;

    &:hover {
      opacity: 1;
    }

    svg {
      margin-right: 15px;
    }
  }

  .active {
    opacity: 1;
  }

  .disabled-link {
    pointer-events: none;
    opacity: 0.2;
  }
`;

export const Profile = styled.div`
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  font-size: 16px;

  strong {
    display: block;
    color: ${props => props.theme.colors.tertiary};
  }

  span {
    display: block;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    margin-right: 18px;
    background: #fff;
  }
`;
