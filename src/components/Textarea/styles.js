import styled from 'styled-components';

export const Label = styled.label`
  span {
    display: block;
    color: #101010;
    font-weight: 600;
    font-size: 16px;
    margin: 14px 0 6px 0;
  }

  textarea {
    background: #ebecf2;
    border: 0;
    border-radius: 8px;
    font-size: 16px;
    margin-left: 6px;
    color: ${props => props.theme.colors.textPrimary};
    width: 100%;
    margin: 0 0 10px;
    padding: 20px;
    height: 180px;
    resize: none;

    &::placeholder {
      color: rgba(0, 0, 0, 0.3);
    }
  }
`;
