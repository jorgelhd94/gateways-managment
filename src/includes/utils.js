const formatDate = function (date) {
  const dateObj = new Date(date);
  let day = '' + dateObj.getDate();
  let month = '' + (dateObj.getMonth() + 1);
  const year = dateObj.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  const formater = day + '.' + month + '.' + year;
  return formater;
};

export { showMsg, formatDate };
