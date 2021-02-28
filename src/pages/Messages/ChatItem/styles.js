import styled from 'styled-components';

export const Preview = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  gap: 20px;

  margin-bottom: 20px;
  background: ${props => props.theme.colors.tertiary};
  padding: 30px;
  border-radius: 8px;

  button {
    width: 100%;
    border: none;
    background: none;
    display: flex;
    flex-direction: column;
  }

  strong {
    display: block;
    color: #454d58;
    text-align: left;
    font-size: 12px;
  }

  .title {
    font-size: 16px;
    font-weight: bold;
  }

  .content {
    width: 100%;

    > div {
      display: flex;
      justify-content: space-between;
    }
  }

  p {
    font-size: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    color: #8e919b;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
  }

  hr {
    border: 0;
    height: 1px;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    margin: 2px 0 8px 0;
  }

  span {
    float: right;
    color: #4d4d4d;
    font-size: 10px;
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
