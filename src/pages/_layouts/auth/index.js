import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, Auth, Right } from './styles';

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>
        <Auth>{children}</Auth>
        <Right>teste</Right>
      </Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
