// getting current date from moment.js, formatting it and appending to <p> element
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

    // declaring and populating timeBlocksArray

    const timeBlocks = $(".container").find(".row");

    const setTimeClasses = function () {
      const textArea = $(this).find("textarea");
      const timeBlockTime = Number.parseInt($(this).data("time"), 10);
      // set new classes to display color blocks
      if (timeBlockTime === currentHour) {
        textArea.removeClass("past").addClass("present");
      } else if (timeBlockTime > currentHour) {
        textArea.removeClass("past").addClass("future");
      }
      //matching events with time blocks
      const plannedEvent = calendarEvents[timeBlockTime];

      textArea.text(plannedEvent);
    };

    timeBlocks.each(setTimeClasses);
    // if there is no data in local storage
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
