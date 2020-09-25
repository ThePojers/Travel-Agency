

export const formatTime = (countDown) => {
  if(countDown ===  undefined){
    return null;
  } else if (isNaN(countDown)){
    return null;
  } else if (countDown < 0){
    return null;
  } else {
    const seconds = Math.floor(countDown%60).toString().padStart(2, '0');

    const minQuotient = countDown/60;
    const minutes = Math.floor(minQuotient%60).toString().padStart(2, '0');

    const hourQuotient = countDown/3600;
    const hours = Math.floor(hourQuotient%60).toString().padStart(2, '0');

    return hours + ':' + minutes + ':' + seconds;
  }
};
