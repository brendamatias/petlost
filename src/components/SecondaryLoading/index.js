import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function SecondaryLoading({ top, right }) {
  return (
    <Container top={top} right={right}>
      <div className="ball-wrapper">
        <div className="ball" />
        <div className="shadow" />
      </div>
    </Container>
  );
}

SecondaryLoading.propTypes = {
  top: PropTypes.number.isRequired,
  right: PropTypes.number.isRequired,
};
