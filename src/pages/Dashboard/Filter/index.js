import React from 'react';
import PropTypes from 'prop-types';

import { MdCancel } from 'react-icons/md';

import { Button } from './styles';

export default function Filter({ handleSubmit, active, content }) {
  return (
    <Button active={active} onClick={handleSubmit}>
      <span>
        {content}
        <MdCancel />
      </span>
    </Button>
  );
}

Filter.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
};
