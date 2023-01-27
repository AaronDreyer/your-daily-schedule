function timeFresh() { 
  var reformatDate = dayjs().format('dddd MMM D YYYY');
  $('#currentDay').text(reformatDate);
  
  }
  
  setInterval(timeFresh, 1000);
  setTimeout(timeFresh, 0);

JSON.parse(window.localStorage.getItem('.description'));

$(".saveBtn").on("click", function () {
  // jQuery siblings - the .siblings() method allows us to search through the siblings of these elements in the DOM tree and construct a new jQuery object from the matching elements.
  var description = $(this).siblings(".description").val();
  // jQuery parent - The parents() is an inbuilt method in jQuery which is used to find all the parent elements related to the selected element. This parents() method in jQuery traverse all the levels up the selected element and return that all elements.
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, description);

})

var today = moment();

function auditTask() {
  // get current number of hours
  var currentDay = today.hours();

  // loop over each time block
  $('.time-block').each(function () {
    var timeId = parseInt($(this).attr('id').split("hour")[1]);

    // if the time Id attribute is before the current hour, add the past class
    if (timeId < currentDay) {
      $(this).addClass('past');
    } // if the time Id attribute is equal to the current hour, remove the past and future classes and add the present class
    else if (timeId === currentDay) {
      $(this).removeClass('past');
      $(this).removeClass('future');
      $(this).addClass('present');
    } // If the time Id attribute is greater than the current time, remove the past and present classes and add the future class
    else {
      $(this).removeClass('past');
      $(this).removeClass('present');
      $(this).addClass('future');
    }
  });
}

// Call the audit task function
auditTask();


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

