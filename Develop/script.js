// Varibale for the current day being displayed at top of page
var currentDay = $('#currentDay');
// function using day.js to display clock with format of weekday, month, day, and year
function displayTime() {
    var rightNow = dayjs().format('dddd MMM DD, YYYY');
    currentDay.text(rightNow);
}
// fucntion is declared along with setinterval to have clock appear immediately upon loading of page
displayTime();
setInterval(displayTime, 1000);

// I had a huge problem finding a way to set a variable value to day.js
// All documentation I found was moment.js but it turns out its the same but with day.js() instead of moment()
var currentHour = dayjs().hour();
// function to apply color coding based on past, present, and future
function colorCode() {
    // each allows all time blocks to be evaluated using jQuery
    $(".time-block").each(function () {
        // THis referes to the id label of hours and splits the the hours from the -
        // This means the wording hour is split (-) from the integer (ex. 9, 10, 11, etc.)
    var currentBlock = $(this).attr("id").split("-")[1];
    // logs the current hour as well as the current block being evauated
    console.log("currentHour " + currentHour)
    console.log("currentBlock " + currentBlock)

    // if statement apply color code based on time
    if (currentBlock < currentHour) {
        $(this).addClass("past");
    }
    else if (currentBlock == currentHour) {
        $(this).addClass("present");
    }
    else {
        $(this).addClass("future");
    }
    })
}
// declaring the color code fucntion
// Sadly I forgot this for the longest time and couldn'y figure out why fucntion wasn't working lol
colorCode();
// Function for save button to save text to local storage
$(".saveBtn").on("click", function () {
  // jQuery siblings - the .siblings() method allows us to search through the siblings of these elements in the DOM tree and construct a new jQuery object from the matching elements.
  var description = $(this).siblings(".description").val();
  // jQuery parent - The parents() is an inbuilt method in jQuery which is used to find all the parent elements related to the selected element. This parents() method in jQuery traverse all the levels up the selected element and return that all elements.
  var time = $(this).parent().attr("id");
// applys text based on time to local storage using setItem
  localStorage.setItem(time, description);
})
// using jQuery getItem to get value of local storage based on time to keep text within field after reloading page
$("#hour-09 .description").val(localStorage.getItem("hour-09"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));