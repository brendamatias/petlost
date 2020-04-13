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
    color: ${props => props.theme.colors.textPrimary};
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

export const UserMessages = styled.div`
  display: flex;
  justify-content: ${props => (props.author ? 'flex-end' : 'flex-start')};
  margin-bottom: 50px;

  div:first-child {
    display: flex;
    align-items: flex-end;
  }

  p {
    margin-left: 18px;
    background: ${props =>
      props.author ? props.theme.colors.primary : '#e9e8ed'};
    padding: 15px 20px;
    border-radius: ${props =>
      props.author ? '25px 25px 0px 25px' : '25px 25px 25px 0px'};
    color: ${props => (props.author ? props.theme.colors.tertiary : '#464e59')};
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
      margin-left: ${props => (props.author ? '0' : '-18px')};
      margin-right: ${props => (props.author ? '25px' : '0')};
      left: ${props => (props.author ? '-50' : '50')};
      text-align: end;
    }
  }

  span {
    font-size: 12px;
    margin-top: 4px;
    display: block;
    padding-left: 10px;
  }

  img {
    display: ${props => (props.author ? 'none' : 'block')};
  }
`;

export const NewMessage = styled.div`
  form {
    display: flex;
    justify-content: space-between;
    align-items: center;

    background: ${props => props.theme.colors.tertiary};
    padding: 15px 20px;
    border-radius: 4px;
    margin-top: 30px;

    input {
      border: 0;
      padding: 10px;
      width: 80%;
      color: ${props => props.theme.colors.textPrimary};
    }

    button {
      border: none;
      background: #e41320;
      color: ${props => props.theme.colors.tertiary};
      font-weight: bold;
      height: 38px;
      padding: 0 25px;
      border-radius: 0 25px 25px;
    }
  }
`;
