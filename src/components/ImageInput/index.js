import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import { Label } from './styles';
import noImage from '~/assets/no-image.png';

export default function ImageInput({ name, image, setImage }) {
  const { registerField } = useField(`${name}`);

  const [preview, setPreview] = useState(image);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name,
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [name, ref, registerField]);

  async function handleChange(e) {
    setImage(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <Label htmlFor={name}>
      <img src={preview || noImage} alt="" />

      <input
        type="file"
        id={name}
        accept="image/*"
        onChange={handleChange}
        ref={ref}
      />
    </Label>
  );
}

ImageInput.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  setImage: PropTypes.oneOfType([PropTypes.func]).isRequired,
};

ImageInput.defaultProps = {
  image: '',
};
