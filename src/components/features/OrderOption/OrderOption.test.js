import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';
import DatePicker from 'react-datepicker';

describe('Component OrderOption', () => {
  it('check that component render correctly', () => {
    const component = shallow(<OrderOption type="text" name="expectedName"/>);
    expect(component).toBeTruthy();
    console.log(component.debug());
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });

  it('should shows props name in title', () => {
    const nameIn = 'expectedName';
    const component = shallow(<OrderOption name={nameIn} type="text" />);
    expect(component.find('.title').text()).toEqual(nameIn);
  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionText',
  date: 'OrderOptionDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: 1},
  text: {},
  date: {},
};

const testValue = mockProps.values[1].id;
const testValueNumber = 3;

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption; /* 1 */

    beforeEach(() => {
      mockSetOrderOption = jest.fn(); /* 2 */
      component = shallow(
        <OrderOption
          type={type}
          setOrderOption={mockSetOrderOption} /* 3 */
          {...mockProps}
          {...mockPropsForType[type]}
        />
      );
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
    });
    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);

          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);

          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
      case 'icons': {
        it('contains div and options', () => {
          // main div
          const divWrapper = renderedSubcomponent.find('.dropdown');
          expect(divWrapper.length).toBe(1);
          console.log(divWrapper.length);
          // Div rendered by maping in values
          const divOption = divWrapper.find('div.icon').length;
          expect(divOption).toBe(mockProps.values.length);
          // Icon
          console.log(divWrapper.debug());
          const icon = divWrapper.find('Icon');
          expect(icon.length).toBe(mockProps.values.length + 1);
          expect(icon.at(0).prop('name')).toBe('times-circle');
          expect(icon.at(1).prop('name')).toBe(mockProps.values[1].icon);
          expect(icon.at(2).prop('name')).toBe(mockProps.values[1].icon);
          // Spans
          const span = divWrapper.find('span');
          expect(span.length).toBe(mockProps.values.length * 2 + 1);
          expect(span.at(0).text()).toBe('none');
          expect(span.at(1).text()).toBe(mockProps.values[0].name);
          expect(span.at(2).text()).toBe('$' + mockProps.values[0].price);
          expect(span.at(3).text()).toBe(mockProps.values[1].name);
          expect(span.at(4).text()).toBe('$' + mockProps.values[1].price);
        });

        it('should run setOrderOption function onClick', () => {

          renderedSubcomponent.find('div .icon').last().simulate('click');
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
      case 'checkboxes': {
        it('contains div/class=checkbox', () => {
          const checkboxesClass = renderedSubcomponent.find('.checkbox');
          expect(checkboxesClass.length).toBe(1);
        });
        it('hould run setOrderOption function on change ', () => {
          renderedSubcomponent.find(`input[value="${testValue}"]`).simulate('change', { currentTarget: { checked: true } });
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]:[mockProps.currentValue, testValue] });
        });
        break;
      }

      case 'number': {

        it('contains div/input', () => {
          const input = renderedSubcomponent.find('input');
          expect(input.length).toBe(1);
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber });
        });
        break;
      }

      case 'text': {
        it('Contains input/type=text', () => {
          const inputText = renderedSubcomponent.find('input');
          expect(inputText.length).toBe(1);
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });

        break;
      }

      case 'date': {
        it('Contains datepicker', () => {
          expect(renderedSubcomponent.find(DatePicker).length).toBe(1);
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find(DatePicker).simulate('change',  testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });

        break;
      }
    }
  });
}
