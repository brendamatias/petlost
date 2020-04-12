import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Container = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 8px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
`;

export const List = styled.div`
  img {
    margin-right: 18px;
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ebecf2;
  margin-right: 25px;
  padding: 5px 20px;
  margin-bottom: 30px;
  border-radius: 8px;

  input {
    border: 0;
    background: none;
    padding: 15px 0;
    font-size: 16px;
    margin-left: 6px;
    color: #464e59;
    width: 100%;
    margin-right: 14px;

    &::placeholder {
      color: #abaeb9;
    }
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: calc(100vh - 350px);
  padding: 5px 25px 5px 0;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: 50px 2fr 1fr;
  gap: 20px;

  margin-bottom: 20px;
  background: #fff;
  padding: 30px;
  border-radius: 8px;

  button {
    border: none;
    background: none;
    display: flex;
    flex-direction: column;
  }

  strong {
    display: block;
    color: #454d58;
    text-align: left;
  }

  p {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #8e919b;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }

  span {
    float: right;
    color: rgba(0, 0, 0, 0.4);
  }

  .notification {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 35px;
    margin-top: 15px;
    background: #b2b6c4;
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }
`;
