import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import * as redux from 'react-redux';

import CarShop from './index';
import { Msg } from './styles';

configure({ adapter: new Adapter() });

jest.mock('react-redux');

describe('CarShop Page', () => {
  const spy = jest.spyOn(redux, 'useSelector');
  spy.mockReturnValue({ car: { product: [] } });

  const wrapper = mount(<CarShop />);
  it('Should render correctly', () => {
    expect(wrapper.find(Msg).text()).toBe(
      'Nenhum produto adicionado no momento'
    );
  });
});
