export default (date) => {
  const todayDate = new Date();

  return todayDate.getDate() === date
    ? 'day-label__day-number_today'
    :'day-label__day-number';
};
