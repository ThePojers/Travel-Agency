import React from 'react';

class TelAvailable extends React.Component {

  changePhoneHandler(){
    const currentTime = new Date();
    const UtcHour = currentTime.getUTCHours();
    if (UtcHour >= 8 && UtcHour < 12) {
      return 'Amanda, 678.243.8455';
    } else if (UtcHour >= 12 && UtcHour < 16) {
      return 'Tobias, 278.443.6443';
    } else if (UtcHour >= 16 && UtcHour < 22) {
      return 'Helena, 167.280.3970';
    } else {
      return 'The office opens at 8:00 UTC';
    }
  }

  render() {
    return(
      <span>
        {this.changePhoneHandler()}
      </span>
    );
  }    
}

export default TelAvailable;