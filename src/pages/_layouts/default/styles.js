import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Wrapper = styled.div`
  height: 100%;

  display: grid;
  grid-template-columns: 0.2fr 1fr;
`;

export const Content = styled.div`
  padding: 60px 80px;

  h1 {
    color: #464e59;

    &:after {
      display: block;
      content: '';
      width: 30px;
      border-radius: 4px;
      height: 4px;
      background: #bb2929;
      margin-top: 5px;
    }
  }
`;

export const Scroll = styled(PerfectScrollbar)`
  max-height: 100vh;
  padding: 0 25px 0 0;
  background: #f7f6fb;
`;
