var todaysDate = moment().format("dddd MMM Do");
console.log(todaysDate);
$("p#currentDay").text(todaysDate);