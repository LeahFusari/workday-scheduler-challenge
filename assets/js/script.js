var todaysDate = moment().format("dddd MMM Do h:m A");
var tasks = {};
var saveBtn =$(".saveBtn");

$("p#currentDay").text(todaysDate);

saveBtn.on("click", function() {

    var time = $(this).siblings(".hour").text();
    var plan = $(this).siblings(".planTask").val();

    // THEN the text for that event is saved in local storage
    localStorage.setItem(time, plan);
    console.log(time,plan)
});





// $("#textarea-9A").click(function() {
    
//     });

// $("#textarea-10A").click(function() {
    
//     });

// $("#textarea-11A").click(function() {
    
//     });

// $("#textarea-12P").click(function() {
   
//    });
   
//    $("#textarea-1P").click(function() {

//    });
   
//    $("#textarea-2P").click(function() {

//    }); 

//    $("#textarea-3P").click(function() {

//    });
   
//    $("#textarea-4P").click(function() {

//    });
   
//    $("#textarea-5P").click(function() {
       
//    });    