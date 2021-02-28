import styled from 'styled-components';
import arrow from '~/assets/arrow-down.svg';

export const Label = styled.label`
  span {
    display: block;
    color: #101010;
    font-weight: 600;
    font-size: 16px;
    margin: 14px 0 6px 0;
  }

  select {
    border-radius: 4px;
    border: 0;
    font-size: 16px;
    color: ${props => props.theme.colors.textPrimary};
    width: 100%;
    margin: 0 0 10px;
    padding: 0 20px;
    height: 48px;
    overflow: hidden;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: url(${arrow}) no-repeat center #ebecf2;
    background-size: 14px;
    background-position: calc(100% - 20px);
  }
`;
