// 
var currentDay = $('#currentDay');
// 
function displayTime() {
    var rightNow = dayjs().format('dddd MMM DD, YYYY');
    currentDay.text(rightNow);
}
// 
displayTime();
setInterval(displayTime, 1000);

var currentHour = dayjs().hour();
// 
function colorCode() {
    $(".time-block").each(function () {
    var currentBlock = $(this).attr("id").split("-")[1];
    console.log("currentHour " + currentHour)
    console.log("currentBlock " + currentBlock)

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
// 
colorCode();
// 
$(".saveBtn").on("click", function () {
  // jQuery siblings - the .siblings() method allows us to search through the siblings of these elements in the DOM tree and construct a new jQuery object from the matching elements.
  var description = $(this).siblings(".description").val();
  // jQuery parent - The parents() is an inbuilt method in jQuery which is used to find all the parent elements related to the selected element. This parents() method in jQuery traverse all the levels up the selected element and return that all elements.
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, description);
})
// 
$("#hour-09 .description").val(localStorage.getItem("hour-09"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));