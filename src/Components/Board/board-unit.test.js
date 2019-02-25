import React from 'react'
import Board from './board'
import {shallow, mount} from 'enzyme'
import '../../setUpTests';

jest.mock('../../Components/Square/square', () => ()=> <div className="square">X</div>);


describe('square', () => {

  let squares = Array(9).fill(null);

  it('renders without crashing', () => {

    const wrapper = shallow(<Board squares={squares}/>);

    expect(wrapper).toMatchSnapshot();

  });

  it('Shows all squares', () => {
    const wrapper = mount(<Board squares={squares}/>);
    expect(wrapper.find('.square').length).toEqual(9);
  });


});


