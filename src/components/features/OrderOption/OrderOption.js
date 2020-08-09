import React from 'react';
import styles from './OrderOption.scss';
// import PropTypes from 'prop-types';
import OrderOptionCheckboxes from './OrderOptionCheckboxes';
import OrderOptionDropdown from './OrderOptionDropdown';
import OrderOptionNumber from './OrderOptionNumber';
import OrderOptionIcons from './OrderOptionIcons';
import OrderOptionText from './OrderOptionText';
import OrderOptionDate from './OrderOptionDate';



const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionText,
  date: OrderOptionDate,
};


const OrderOption = ({name, type,  id, setOrderOption, ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent
          {...otherProps}
          setOptionValue={value => setOrderOption({[id]: value})}
        />
      </div>
    );
  }
};
  

export default OrderOption;