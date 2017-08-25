const getStatePensionDate = require('get-uk-state-pension-date').getStatePensionDate;
const getDate = require('./get-date');

function logUndefinedDates(sex) {
  console.log(sex);

  let count = 0;

  for (let year = 1900; year <= 2000; year++) {
    for (let month = 1; month <= 12; month++) {
      for (let day = 1; day <= 31; day++) {
        const date = getDate(year, month, day);
        if (date) {
          const spaDate = getStatePensionDate(`${year}-${month}-${day}`, sex);
          if (spaDate === undefined) {
            count++;
            console.log(`${year}-${month}-${day}`, '=', spaDate);
          }
        }
      }
    }
  }

  console.log(`${count} dates return undefined\n`);
}

logUndefinedDates('male');
logUndefinedDates('female');
