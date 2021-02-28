import styled from 'styled-components';

export const Container = styled.div`
  /* height: calc(100vh - 2000px) !important;

  .no-pets {
    text-align: center;
  } */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 60px - 24px - 24px);

  .header {
    display: flex;
    justify-content: space-between;

    button {
      height: 100%;
    }
  }
`;
