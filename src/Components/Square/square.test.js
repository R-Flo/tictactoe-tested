import React from 'react'
import Square from './square'
import {shallow} from 'enzyme'
import '../../setUpTests';

it('renders without crashing', () => {
  const wrapper = shallow(
      <Square value="X"/>
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.prop('children')).toEqual('X');
});
