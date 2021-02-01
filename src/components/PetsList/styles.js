import styled from 'styled-components';
import { lighten } from 'polished';

export const TagsFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TagFilter = styled.span`
  background: ${props => lighten(0.5, props.color)};
  color: ${props => props.color};
  padding: 2px 15px;
  border-radius: 15px;
  margin: 0 10px 10px 0;
  font-weight: 600;
`;
