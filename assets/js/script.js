var todaysDate = moment().format("dddd MMM Do h:mm A");
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

        if(savedPlanTask !== null) {
            $(this).siblings(".planTask").val(savedPlanTask);
            
        }
    });
});

//check time block against current time and update CSS for time block

    $(".time-block").each(function() {
        var currentHour = moment().format("k");
        var hourBlock = parseInt($(this).attr("id"));
        
            if(currentHour > hourBlock){
                $(this).addClass("past");
            }
                else if(currentHour == hourBlock){
                    $(this).addClass("present");
                }
                    else{
                        $(this).addClass("future");
                    }
                })
        //refresh the time check every few mintue to keep colors current if app is left open
                setInterval(() => {
                    $(".time-block").each(function() {
                        var currentHour = moment().format("k");
                        var hourBlock = parseInt($(this).attr("id"));
                        
                            if(currentHour > hourBlock){
                                $(this).addClass("past");
                            }
                                else if(currentHour == hourBlock){
                                    $(this).addClass("present");
                                }
                                    else{
                                        $(this).addClass("future");
                                    }
                                })
                            
                }, 30000); 
    




