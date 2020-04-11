import styled from 'styled-components';

export const Container = styled.div`
  background: #e41320;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ul {
    li {
      padding: 24px 0;

      a {
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        transition: opacity 0.2s;
        opacity: 0.7;

        &:hover {
          opacity: 1;
        }

        svg {
          margin-right: 15px;
        }
      }
    }
  }
`;

export const Profile = styled.div`
  margin-bottom: 80px;
  display: flex;
  align-items: center;
  font-size: 16px;

  span {
    color: #fff;
    font-weight: bold;
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
    margin-right: 18px;
  }
`;
