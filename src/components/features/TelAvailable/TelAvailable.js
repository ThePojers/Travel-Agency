import React from 'react';

class TelAvailable extends React.Component {

  changePhoneHandler(happyHourTime){
    if (happyHourTime <= 4*60*60 && happyHourTime > 0) {
      return 'Amanda, 678.243.8455';
    } else if (happyHourTime <= 24*60*60 && happyHourTime >= 20*60*60) {
      return 'Tobias, 278.443.6443';
    } else if (happyHourTime < 20*60*60 && happyHourTime >= 14*60*60) {
      return 'Helena, 167.280.3970';
    } else {
      return 'The office opens at 8:00 UTC';
    }

  }

  getCountdownTime(){
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if(currentTime.getUTCHours() >=12){
      nextNoon.setUTCDate(currentTime.getUTCDate()+1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime())/1000);
  }
    
  render() {
    const happyHourTime = this.getCountdownTime();
    return(
      <span>
        {this.changePhoneHandler(happyHourTime)}
      </span>
    );
  }    
}

export default TelAvailable;