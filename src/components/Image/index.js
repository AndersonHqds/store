import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ src, alt, ...rest }) {
  return (
    <img
      src={src || 'https://www.freeiconspng.com/uploads/no-image-icon-4.png'}
      onError={e => {
        e.target.error = null;
        e.target.src =
          'https://www.freeiconspng.com/uploads/no-image-icon-4.png';
      }}
      alt={alt}
      {...rest}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
};
