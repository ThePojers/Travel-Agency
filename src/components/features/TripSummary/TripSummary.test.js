import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('Check that image have right props', () => {
    const imageUrl = 'image.jpg';
    const altImageUrl = 'altImage.jpg';
    const Tags = ['spa', 'skiing', 'beach'];
    const component = shallow(<TripSummary image={imageUrl} name={altImageUrl} tags={Tags}/>);
    expect(component.find('img').prop('src')).toEqual(imageUrl);
    expect(component.find('img').prop('alt')).toEqual(altImageUrl);
  });

  it('check that id props is matching link', () => {
    const Id = 'abc';
    const expectedUrl = '/trip/abc';
    const Tags = ['spa', 'skiing', 'beach'];
    const component = shallow(<TripSummary id={Id}  tags={Tags}/>);
    expect(component.find('Link').prop('to')).toEqual(expectedUrl);
  });

  it('check that props name cost and days rendering correctly ', () => {
    const expectedName = 'nameProps';
    const expectedSpan = '7 daysfrom 5000';
    const Tags = ['spa', 'skiing', 'beach'];
    const component = shallow(<TripSummary name='nameProps' cost='5000' days={7}  tags={Tags}/>);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details').text()).toEqual(expectedSpan);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('check tags is rendering in the right way ', () => {
    const Tags = ['spa', 'skiing', 'beach'];
    const component = shallow(<TripSummary tags={Tags}/>);
    expect(component.find('.tag').at(0).text()).toEqual(Tags[0]);
    expect(component.find('.tag').at(1).text()).toEqual(Tags[1]);
    expect(component.find('.tag').at(2).text()).toEqual(Tags[2]);
  });

  it('check case that tags are false and div should not render', () => {
    const Tags = [];
    const component = shallow(<TripSummary tags={Tags}/>);
    console.log(component.debug());
    expect(component.exists('.tags')).toBe(false);
    console.log(component.debug());
  });
});