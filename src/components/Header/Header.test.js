import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { NavLink } from 'react-router-dom';

import Header from './index';

configure({ adapter: new Adapter() });

jest.mock('react-redux');

describe('Header component', () => {
  const wrapper = shallow(<Header />);

  it('Should be able to navigate', () => {
    const navLink = wrapper.find(NavLink);
    expect(navLink.at(0).props().to).toBe('/');
    expect(navLink.at(1).props().to).toBe('carshop');
  });
});
