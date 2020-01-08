import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';

import ProductCard from './index';
import { AddButton, Image, Details, ColorBox } from './styles';

configure({ adapter: new Adapter() });

describe('ProductCard Component', () => {
  const props = {
    addToCarShop: jest.fn(),
    name: 'Anderson',
    image: 'myImage',
    price: '2.00',
    rate: 2,
    color: 'red',
  };

  const wrapper = mount(<ProductCard {...props} />);

  it('Should call the parent function', () => {
    expect(wrapper.find(AddButton).length).toBe(1);
    wrapper.find(AddButton).simulate('click');
    expect(props.addToCarShop).toHaveBeenCalled();
  });

  it('Should render correctly', () => {
    expect(wrapper.find(Image).props().src).toBe(props.image);
    expect(wrapper.find(Details).length).toBe(1);
    expect(wrapper.find(ColorBox).props().color).toBe(props.color);
    wrapper.setProps({ image: null });
    expect(wrapper.find(Image).props().src).toBe(
      'https://www.freeiconspng.com/uploads/no-image-icon-4.png'
    );
  });
});
