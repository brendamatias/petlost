import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useField } from '@rocketseat/unform';

import { MdClose } from 'react-icons/md';
import { Content } from './styles';
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
    const currentImage = e?.target.files[0] || null;
    const imageUrl = currentImage ? URL.createObjectURL(currentImage) : null;

    setImage(currentImage);
    setPreview(imageUrl);
  }

  return (
    <Content>
      <label htmlFor={name}>
        <img src={preview || noImage} alt="" />

        <input
          type="file"
          id={name}
          accept="image/*"
          onChange={handleChange}
          ref={ref}
        />
      </label>
      {preview && (
        <div>
          <button type="button" onClick={() => handleChange(null)}>
            <MdClose size={14} />
          </button>
        </div>
      )}
    </Content>
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
