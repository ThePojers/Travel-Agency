import React from 'react';
import {shallow} from 'enzyme';
import TelAvailable from './TelAvailable';

// const obj 

const trueDate = Date;

const select = {
  description: 'span',
};

// Time Test

const mockDate = (customDate) => class extends Date {
  constructor(...args) {
    if(args.length){
      super(...args);
    } else {
      super(customDate);
    }
    return this;
  }
  static now(){
    return (new Date(customDate)).getTime();
  }
};

const checkDescriptionAtTime = (time, expectedDescription) => {
  it(`should show correct at ${time}`, () => {
    global.Date = mockDate(`2019-05-14T${time}.135Z`);
  
    const component = shallow(<TelAvailable />);
    const renderedTime = component.find(select.description).text();
    expect(renderedTime).toEqual(expectedDescription);
  
    global.Date = trueDate;
  });
};

describe('Component Header telephone logic check', () => {
  checkDescriptionAtTime('07:59:59', 'The office opens at 8:00 UTC');
  checkDescriptionAtTime('08:00:00', 'Amanda, 678.243.8455');
  checkDescriptionAtTime('11:59:59', 'Amanda, 678.243.8455');
  checkDescriptionAtTime('12:00:00', 'Tobias, 278.443.6443');
  checkDescriptionAtTime('16:00:00', 'Tobias, 278.443.6443');
  checkDescriptionAtTime('16:00:01', 'Helena, 167.280.3970');
  checkDescriptionAtTime('22:00:00', 'Helena, 167.280.3970');
  checkDescriptionAtTime('22:00:01', 'The office opens at 8:00 UTC');
});

