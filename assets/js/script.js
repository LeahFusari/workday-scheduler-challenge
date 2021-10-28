var todaysDate = moment().format("dddd MMM Do h:m A");
var tasks = {};
var saveBtn =$(".saveBtn");

$("p#currentDay").text(todaysDate);

saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".planTask").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(time, plan);
    // console.log(time,plan);
});





