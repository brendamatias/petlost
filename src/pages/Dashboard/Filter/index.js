import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdCancel } from 'react-icons/md';

import { Button } from './styles';

export default function Filter({ content }) {
  const [active, setActive] = useState(false);

  return (
    <Button
      active={active}
      onClick={() => {
        setActive(!active);
      }}
    >
      <span>
        {content}
        <MdCancel />
      </span>
    </Button>
  );
}

Filter.propTypes = {
  content: PropTypes.string.isRequired,
};
