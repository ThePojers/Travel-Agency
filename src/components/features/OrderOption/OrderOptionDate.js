import React from 'react';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
 
class OrderOptionDate extends React.Component {

  static propTypes = {
    setOptionValue: PropTypes.func,
    currentValue: PropTypes.instanceOf(Date),
  }

    handleChange = date => {
      const {setOptionValue} = this.props;
      setOptionValue(date);
    };
   
    render() {
      const {currentValue} = this.props;
      return (
        <DatePicker
          selected={currentValue}
          onChange={this.handleChange}
        />
      );
    }
}


export default OrderOptionDate;