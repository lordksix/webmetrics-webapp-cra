const dataString = (dt) => {
  if (dt > 0) {
    const dateObject = new Date(dt * 1000);
    const humanDateFormat = dateObject.toLocaleString('en-US', { timeZoneName: 'short' });
    return humanDateFormat;
  } return 'No dates';
};

export default dataString;
