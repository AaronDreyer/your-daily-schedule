// function timeFresh() { 
// var reformatDate = dayjs().format('dddd MMM D YYYY');
// $('#currentDay').text(reformatDate);

// }
  
//   setInterval(timeFresh, 1000);
//   setTimeout(timeFresh, 0);

var currentDay = $('#currentDay');

function displayTime() {
    var rightNow = dayjs().format('dddd MMM DD, YYYY');
    currentDay.text(rightNow);
}

displayTime();
setInterval(displayTime, 1000);

var currentHour = parseInt(dayjs().hour());

function colorCode() {
    $(".time-block").each(function () {
    var currentBlock = parseInt($(this).attr("id").split("-")[1]);
    console.log("currentHour " + currentHour)
    console.log("currentBlock " + currentBlock)

    if (currentBlock < currentHour) {
        console.log($(this).attr("class"))
        $(this).addClass("past");
        console.log($(this).attr("class"))
        console.log(currentBlock < currentHour)
        console.log("past")
    }
    else if (currentBlock == currentHour) {
        $(this).addClass("present");
        console.log(currentBlock == currentHour)
        console.log("present")
    }
    else {
        $(this).addClass("future");
        console.log(currentBlock > currentHour)
        console.log("future")
    }
    })
}

colorCode();

$(".saveBtn").on("click", function () {
  // jQuery siblings - the .siblings() method allows us to search through the siblings of these elements in the DOM tree and construct a new jQuery object from the matching elements.
  var description = $(this).siblings(".description").val();
  // jQuery parent - The parents() is an inbuilt method in jQuery which is used to find all the parent elements related to the selected element. This parents() method in jQuery traverse all the levels up the selected element and return that all elements.
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, description);

})

// TO DO: not saving events entered into textarea after refresh




// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.