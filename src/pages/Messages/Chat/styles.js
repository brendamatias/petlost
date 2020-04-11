import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div``;

export const Header = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #d9dce4;

  strong {
    font-size: 18px;
    display: block;
    color: #464e59;
  }

  span {
    font-size: 13px;
    color: #9d9ca1;
    font-weight: bold;
  }
`;

export const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: calc(100vh - 450px);
  height: calc(100vh - 450px);
  padding: 5px 25px 5px 0;
`;

export const UserMessage = styled.div`
  margin-bottom: 50px;

  div:first-child {
    display: flex;
    align-items: flex-end;
  }

  p {
    margin-left: 18px;
    background: #e9e8ed;
    padding: 15px 20px;
    border-radius: 25px 25px 25px 0px;
    color: #464e59;
    font-weight: 600;

    &::after {
      content: 'Today at 1:00pm';
      display: block;
      position: absolute;
      margin-top: 20px;
      font-size: 11px;
      padding: 0;
      color: rgba(0, 0, 0, 0.4);
      font-weight: bold;
      margin-left: -18px;
    }
  }

  span {
    font-size: 12px;
    margin-top: 4px;
    display: block;
    padding-left: 10px;
  }
`;

export const NewMessage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: #fff;
  padding: 15px 20px;
  border-radius: 4px;
  margin-top: 30px;

  input {
    border: 0;
    padding: 10px;
    width: 80%;
    color: #464e59;
  }

  button {
    border: none;
    background: #e41320;
    color: #fff;
    font-weight: bold;
    height: 38px;
    padding: 0 25px;
    border-radius: 0 25px 25px;
  }
`;
