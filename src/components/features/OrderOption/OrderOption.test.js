import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('check that component render correctly', () => {
    const component = shallow(<OrderOption type="type" name="name"/>);
    expect(component).toBeTruthy();
    console.log(component.debug());
  }); 
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });
});