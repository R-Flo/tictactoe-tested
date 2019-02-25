import React from 'react'
import Board from './board'
import {shallow, mount} from 'enzyme'
import '../../setUpTests';

describe('square', () => {

  it('calls onClick event on click of a board square', () =>{

    let squares = Array(9).fill(null);

    const onClick = jest.fn();

    let wrapper = mount(<Board squares={squares} onClick={onClick}/>);

    wrapper.find('button.square').first().simulate('click');

    expect(onClick).toBeCalledWith(0)

  });


});


