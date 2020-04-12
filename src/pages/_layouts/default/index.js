import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, Scroll } from './styles';

import Sidebar from '~/components/Sidebar';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Sidebar />
      <Scroll>
        <Content>{children}</Content>
      </Scroll>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
