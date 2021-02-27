import styled from 'styled-components';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { lighten } from 'polished';

export const Scroll = styled(PerfectScrollbar)`
  max-height: calc(100vh - 120px - 47px - 60px - 42px - 40px - 24px - 40px);
  padding: 0 25px 0 0;
  background: ${props => props.theme.colors.background};

  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    grid-gap: 40px;

    li {
      position: relative;
      width: 260px;
      display: flex;
      flex-direction: column;
      margin-right: 20px;
      background: #fff;
      border-radius: 8px 8px 0 0;
      text-align: left;
      border: 1px solid #eee;
      border-top: none;

      > button {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        margin: 10px 10px 0;
        background-color: #fff;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        right: 0;
        border: none;
        color: #ddd;
        transition: background 0.2s;

        &:hover {
          color: #fff;
          background: #bd2a1d;
        }
      }

      img {
        width: 100%;
        height: 150px;
        border-radius: 8px 8px 0 0;
      }

      > div {
        padding: 20px 15px;

        > strong {
          display: block;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.9);
        }

        p {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: #8e919b;
          margin: 4px 0 12px 0;

          strong {
            margin-left: 4px;
          }

          svg {
            margin-right: 4px;
          }
        }
      }
    }
  }
`;

export const TagsFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const TagFilter = styled.span`
  background: ${props => lighten(0.5, props.color)};
  color: ${props => props.color};
  padding: 2px 15px;
  border-radius: 15px;
  margin: 0 10px 0 0;
  font-weight: 600;
`;
