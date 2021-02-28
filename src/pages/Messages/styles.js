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
    color: ${props => props.theme.colors.textPrimary};
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
