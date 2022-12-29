export const ModifyDate = (date) => {
  var d = date.split('T')[0];
  const DateObj = new Date(d);

  return `${DateObj.getDate()} ${DateObj.toLocaleString('en-US', { month: 'short' })} ${DateObj.getFullYear()}`;
};
