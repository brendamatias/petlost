import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';
import noImage from '~/assets/no-image.png';

export default function AvatarInput({ avatar, setAvatar }) {
  const { registerField } = useField('avatar');

  const [preview, setPreview] = useState(avatar);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'avatar',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref, registerField]);

  async function handleChange(e) {
    setAvatar(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <Container>
      <label htmlFor="avatar">
        <img src={preview || noImage} alt="" />

        <input
          type="file"
          id="avatar"
          accept="image/*"
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container>
  );
}

AvatarInput.propTypes = {
  avatar: PropTypes.string,
  setAvatar: PropTypes.oneOfType([PropTypes.func]).isRequired,
};

AvatarInput.defaultProps = {
  avatar: '',
};
