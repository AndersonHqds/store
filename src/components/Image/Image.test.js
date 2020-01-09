import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import Image from './index';

configure({ adapter: new Adapter() });

const props = {
  src: 'fakeImage',
  alt: 'Anderson',
};

describe('Image component', () => {
  const wrapper = mount(<Image {...props} />);

  it('Should render correctly', () => {
    expect(wrapper.find('img').props().src).toBe(props.src);
    wrapper.setProps({ src: '' });
    expect(wrapper.find('img').props().src).toBe(
      'https://www.freeiconspng.com/uploads/no-image-icon-4.png'
    );
  });
});
