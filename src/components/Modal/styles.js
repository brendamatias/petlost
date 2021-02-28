import styled from 'styled-components';
import { darken } from 'polished';

export const ModalContent = styled.div`
  display: ${props => (props.visible ? 'block' : 'none')};
  position: fixed;
  z-index: 11;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  hr {
    border: 0;
    height: 1px;
    background: rgba(0, 0, 0, 0.1);
    margin: 10px 0 20px;
  }

  > div {
    background-color: #fefefe;
    margin: 15% auto;
    border-radius: 8px;
    width: 600px;

    .modal-header {
      padding: 15px 20px 0 20px;
      border-radius: 8px 8px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      span {
        font-size: 20px;
        font-weight: bold;
        color: ${props => props.theme.colors.textPrimary};
      }

      button {
        border: none;
        background: transparent;
      }

      svg {
        cursor: pointer;
        transition: color 0.4s;
        color: ${props => props.theme.colors.textPrimary};

        &:hover {
          color: ${darken(0.03, '#e41320')};
        }
      }
    }

    .modal-content {
      padding: 0 20px 20px 20px;

      button {
        width: 100%;
      }
    }
  }
`;
