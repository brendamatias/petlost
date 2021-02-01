import styled from 'styled-components';
import { darken } from 'polished';

export const ButtonContent = styled.button`
  background: #e41320;
  border: 0;
  border-radius: 4px;
  transition: background 0.2s;
  color: ${props => props.theme.colors.tertiary};
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;

  &:hover {
    background: ${darken(0.03, '#E41320')};
  }

  a {
    color: ${props => props.theme.colors.tertiary};
  }
`;
