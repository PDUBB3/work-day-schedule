const renderCurrentDate = () => {
  const dateTime = $("#currentDay");
  const displayNow = moment().format("dddd, MMMM Do");
  dateTime.text(displayNow);
};

const renderCalenderEvents = () => {
  //retrieve from local
  const plannerEvents = localStorage.getItem("plannerEvents");

  if (plannerEvents !== null) {
    const currentHour = moment().hour();
    const timeBlocks = $(".container .row");
    const callback = function () {
      const timeBlockTime = Number.parseInt($(this).data("time"), 10);
      console.log(timeBlockTime);
    };
    console.log(timeblocks);
    timeblocks.each(callback);
  } else {
    localStorage.setItem("plannerEvents", JSON.stringify({}));
  }
};

const onReady = () => {
  renderCurrentDate();
};

$(document).ready(onReady);
