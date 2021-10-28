var todaysDate = moment().format("dddd MMM Do h:m A");
var tasks = {};
var saveBtn =$(".saveBtn");

//display todays date in header
$("p#currentDay").text(todaysDate);

//capture plan task and time with save button click for that time block
saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".planTask").val();

    // the text/value for save button block is saved in local storage
    localStorage.setItem(time, plan);
    
});


//Load tasks from local storage

$(document).ready(function() {

    $(".hour").each(function() {
        var savedHourBlock = $(this).text();
        var savedPlanTask = localStorage.getItem(savedHourBlock);

        // console.log(savedHourBlock);
        // console.log(savedPlanTask);

        if(savedPlanTask !== null) {
            $(this).siblings(".planTask").val(savedPlanTask);
            
        }
    });
});





