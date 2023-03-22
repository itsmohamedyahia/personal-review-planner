// // ==========
// // SELECTION
// // ==========

// const day = document.querySelectorAll(".days li");
// const days = document.getElementById("days");

// // =======
// // DATA
// // =======

// const clrs = {
//   red: "red",
//   green: "green",
//   yellow: "yellow",
// };

// // +++++++++++
// // INITIAL STATE
// // ++++++++++++

// //window.localStorage.setItem("daysState", "[]");

// // prevent text select upon double click, set 0.5s long click, add bg colors to days from storage
// for (var i = 0; i < day.length; i++) {
//   day[i].classList.add("prevent-select");
//   day[i].setAttribute("data-long-press-delay", "500");
//   daysState = JSON.parse(localStorage.daysState);
//   day[i].classList.add(daysState[i]);
// }

// // ===================
// // EVENT LISTENERS
// // ===================

// //normal click
// days.addEventListener("click", (e) => {
//   if (checkTarget(e)) {
//     setBg(e, "green");
//     updateStorage(e, "green");
//   }
// });

// //double click

// days.addEventListener("dblclick", (e) => {
//   if (checkTarget(e)) {
//     setBg(e, "yellow");
//     updateStorage(e, "yellow");
//   }
// });

// // long click
// days.addEventListener("long-press", (e) => {
//   if (checkTarget(e)) {
//     e.preventDefault();
//     setBg(e, "red");
//     updateStorage(e, "red");
//   }
// });

// // =====================
// // FUNCTION DEFINITIONS
// // =====================

// function checkTarget(e) {
//   return e.target && e.target.matches("li");
// }
// //----------------
// function setBg(e, clr) {
//   // const clrsArr = [...clrs];
//   const clrsObj = { ...clrs };

//   e.target.classList.add(clr);
//   delete clrsObj[clr];
//   e.target.classList.remove(...Object.values(clrsObj));
// }
// //----------------
// function updateStorage(e, clr) {
//   const index = Array.from(e.target.parentNode.children).indexOf(e.target);

//   const daysState = JSON.parse(localStorage.daysState);

//   daysState[index] = clr;
//   const daysStateString = JSON.stringify(daysState);
//   localStorage.setItem("daysState", daysStateString);
// }

// ==============
// JUNK
// ==============

// day.forEach((li) => {

// });

// day.forEach((li) => {
//   li.addEventListener("click", clickHandler);
// });

// function clickHandler() {
//   console.log(this);
//   console.log(5);
// }

// document.querySelector(".days").addEventListener("click", () => {
//   console.log(6);
// });

// localStorage.removeItem("daysState");

// Define constants
const DAYS = document.getElementById("days");
const DAY_ITEMS = document.querySelectorAll(".days li");
const COLORS = {
  red: "red",
  green: "green",
  yellow: "yellow",
};

// Get initial state from local storage
let daysState = JSON.parse(localStorage.getItem("daysState")) || [];

// Set background colors of days based on initial state
DAY_ITEMS.forEach((dayItem, i) => {
  dayItem.classList.add("prevent-select");
  dayItem.setAttribute("data-long-press-delay", "500");
  dayItem.classList.add(daysState[i]);
});

// Define event listeners
DAYS.addEventListener("click", handleClick);
DAYS.addEventListener("dblclick", handleDoubleClick);
DAYS.addEventListener("long-press", handleLongClick);
DAYS.addEventListener("contextmenu", handleRightClick);

// Define event handler functions
function handleClick(event) {
  const targetDay = event.target.closest("li");
  if (targetDay) {
    setDayState(targetDay, COLORS.green);
  }
}

function handleDoubleClick(event) {
  const targetDay = event.target.closest("li");
  if (targetDay) {
    setDayState(targetDay, COLORS.yellow);
  }
}

function handleLongClick(event) {
  const targetDay = event.target.closest("li");
  if (targetDay) {
    event.preventDefault();
    setDayState(targetDay, COLORS.red);
  }
}

function handleRightClick(event) {
  const targetDay = event.target.closest("li");
  if (targetDay) {
    event.preventDefault();
    setDayState(targetDay);
  }
}

// Define utility functions
function setDayState(dayItem, color) {
  dayItem.classList.remove(...Object.values(COLORS));
  dayItem.classList.add(color);
  daysState[getIndex(dayItem)] = color;
  localStorage.setItem("daysState", JSON.stringify(daysState));
}

function getIndex(dayItem) {
  return Array.from(DAY_ITEMS).indexOf(dayItem);
}

//localStorage.removeItem("daysState");
