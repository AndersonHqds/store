import React from 'react';
import PropTypes from 'prop-types';
import { WrapperContainer } from './styles';

export default function Wrapper({ children, style, align }) {
  return (
    <WrapperContainer style={style} align={align}>
      {children}
    </WrapperContainer>
  );
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array])
    .isRequired,
  style: PropTypes.instanceOf(Object),
  align: PropTypes.string,
};

Wrapper.defaultProps = {
  style: {},
  align: '',
};
