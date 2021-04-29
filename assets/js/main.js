// getting current date from moment.js and creating format for date
const renderCurrentDate = () => {
  const dateTime = $("#currentDay");
  const displayNow = moment().format("dddd, MMMM Do");

  dateTime.text(displayNow);
};

// getting data from local storage
const renderCalendarEvents = () => {
  const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));

  // if data is present in local storage
  if (calendarEvents !== null) {
    // getting current hour using moment.js
    const currentHour = moment().hour();

    // declaring and populating Array for time blocks
    const timeBlocks = $(".container").find(".row");

    // creating function to set time classes
    const setTimeClasses = function () {
      const textArea = $(this).find("textarea");
      const timeBlockTime = Number.parseInt($(this).data("time"), 10);
      // set classes to display color blocks for timeblocks
      if (timeBlockTime === currentHour) {
        textArea.removeClass("past").addClass("present");
      } else if (timeBlockTime > currentHour) {
        textArea.removeClass("past").addClass("future");
      }
      //creating event to associated time block
      const plannedEvent = calendarEvents[timeBlockTime];

      textArea.text(plannedEvent);
    };

    timeBlocks.each(setTimeClasses);
    // if no data is present in local storage
  } else {
    localStorage.setItem("calendarEvents", JSON.stringify({}));
  }
};

// saving calendar events in local storage
const onClick = function (event) {
  const calendarEvents = JSON.parse(localStorage.getItem("calendarEvents"));
  const target = $(event.target);
  const currentTarget = $(event.currentTarget);
  if (target.is("button")) {
    const key = target.attr("id");
    const value = target.parent().find("textarea").val();

    const newEvent = {
      ...calendarEvents,
      [key]: value,
    };
    localStorage.setItem("calendarEvents", JSON.stringify(newEvent));
    console.log(calendarEvent);
  }
};

// on load function
const onReady = () => {
  $(".container").click(onClick);
  renderCurrentDate();

  renderCalendarEvents();
};
$(document).ready(onReady);
