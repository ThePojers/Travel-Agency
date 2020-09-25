

export const formatTime = (arg) => {
  console.log(isNaN(arg));
  if(arg ===  undefined){
    return null;
  } else if (isNaN(arg)){
    return null;
  } else if (arg < 0){
    return null;
  } else {
    const seconds = Math.floor(arg%60).toString().padStart(2, '0');

    const minQuotient = arg/60;
    const minutes = Math.floor(minQuotient%60).toString().padStart(2, '0');

    const hourQuotient = arg/3600;
    const hours = Math.floor(hourQuotient%60).toString().padStart(2, '0');

    return hours + ':' + minutes + ':' + seconds;
  }


};
