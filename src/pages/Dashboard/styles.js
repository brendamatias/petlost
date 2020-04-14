import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div``;

export const Content = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
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
        padding: 30px;

        > strong {
          display: block;
          font-size: 16px;
          color: rgba(0, 0, 0, 0.9);
          margin-top: 10px;
        }

        p {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: #8e919b;
          margin-top: 5px;

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

export const Filters = styled.div`
  margin-bottom: 30px;
  display: flex;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  background: ${props => lighten(0.5, props.color)};
  color: ${props => props.color};
  padding: 2px 15px;
  border-radius: 15px;
  margin: 0 10px 10px 0;
  font-weight: 600;
`;
