// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var scheduleDisplay = $(".container-fluid");
var scheduledHours = [9, 10, 11, 12, 1, 2, 3, 4, 5];
$(function() {
  
  console.log();
});

//var userInput= $("#userInput-"+[i]+"-btn").value;
function addEvent(eventText) {
  if (eventText.value != null);
    userInput= eventText.value;
    localStorage.setItem(eventText.id, userInput);
    console.log(userInput);
    console.log("stored" + eventText.id);
  };

var past;
var future;

function displaySchedule() {
    for(i=0; i< scheduledHours.length; i++){
     
      var createDiv = document.createElement("div");
      createDiv.setAttribute("id", "hour-"+ scheduledHours[i]);
      createDiv.setAttribute("class", "row time-block future");
      scheduleDisplay.append(createDiv);

      var createTimeDisplay = document.createElement("div");
      createTimeDisplay.setAttribute("class", "col-2 col-md-1 hour text-center py-3");
      if(scheduledHours[i]>=9 && scheduledHours[i]<12){
        createTimeDisplay.textContent = scheduledHours[i] + " AM";
      } else {
        createTimeDisplay.textContent = scheduledHours[i] + " PM";
      };
      createDiv.append(createTimeDisplay);
      
      var createTextArea = document.createElement("textarea");
      createTextArea.setAttribute("id","userInput-"+ [i]);
      createTextArea.setAttribute("class", "col-8 col-md-10 description");
      createTextArea.setAttribute("rows", "3");
      console.log(createTextArea.id);
      if (localStorage.getItem(createTextArea.id) !== null){
        createTextArea.value= localStorage.getItem(createTextArea.id);
      }
      createDiv.append(createTextArea);

      var createSaveButton = document.createElement("button");
      createSaveButton.setAttribute("id","userInput-"+ [i]+"-btn");
      createSaveButton.setAttribute("class", "btn saveBtn col-2 col-md-1");
      console.log (createSaveButton);
      createSaveButton.setAttribute("aria-label", "save");
      createDiv.append(createSaveButton);
//let is called to use arrow function; 
      let index = i;
      $("#userInput-" + i + "-btn").on("click", ()=>{addEvent(document.getElementById("userInput-" + index));})
      
      var createSaveIcon = document.createElement("i");
      createSaveIcon.setAttribute("class", "fas fa-save");
      createSaveIcon.setAttribute("aria-hidden", "true");
      createSaveButton.append(createSaveIcon);

      if (Hour == scheduledHours[i]) { 
        createPast();
        createPresent(i); 
      //the function removes all the non past boxes, do not want that
      };
     
    };
  };
var currentHour = Hour;
var pastHour = [];
   
function createPast() {
  $("textarea").removeClass("future").addClass("past");
}

function createPresent(index) {
  $("#userInput-"+ index).removeClass("past").addClass("present");
}

 
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


var currentDay = document.getElementById("currentDay");
var Day = (dayjs().format('dddd MMM DD, YYYY'));  
var Hour = (dayjs().format('h'));
currentDay.textContent = "Today is " + Day;

console.log(Day);
console.log(Hour);



displaySchedule();

$("#savebtn").on("click",addEvent);