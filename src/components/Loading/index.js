import React from 'react';

import { Container } from './styles';

export default function Loading() {
  return (
    <Container>
      <div className="progress-bar">
        <span className="bar">
          <span className="progress" />
        </span>
      </div>
    </Container>
  );
}
