// function to add current date to local storage//
const renderCurrentDate = () => {
  const dateTime = $("#currentDay");
  // format of date or time form to display//
  const displayNow = moment().format("dddd, MMMM Do");
  dateTime.text(displayNow);
};
// function to add calender events to local storage//
const renderCalenderEvents = () => {
  //retrieve planner events from local//
  const plannerEvents = localStorage.getItem("plannerEvents");
  //if statement- if data is not null do nothing//
  if (plannerEvents !== null) {
    const currentHour = moment().hour();
    const timeBlocks = $(".container .row");
    const callback = function () {
      // get time from row//
      const timeBlockTime = Number.parseInt($(this).data("time"), 10);
      console.log(timeBlockTime);
    };
    console.log(timeblocks);
    timeblocks.each(callback);
  } else {
    // empty array within local storage//
    localStorage.setItem("plannerEvents", JSON.stringify({}));
  }
};
// if true- render data in planner//
const onReady = () => {
  renderCurrentDate();
};

//function to display when window is loading//
$(document).ready(onReady);
