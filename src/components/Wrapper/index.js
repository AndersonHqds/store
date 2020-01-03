import React from 'react';
import { WrapperContainer } from './styles';

export default function Wrapper(props) {
  return <WrapperContainer {...props}>{props.children}</WrapperContainer>;
}
