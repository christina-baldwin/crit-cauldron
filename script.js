// TOGGLE MOBILE NAV
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// FILTER PRODUCT TYPE
//  select all elements with data-filter attribute and iterate through each selected element
document.querySelectorAll("[data-filter]").forEach((button) => {
  // to each of those elements add a click event listener
  button.addEventListener("click", () => {
    //  get the value of the data-filter attribute
    const filter = button.getAttribute("data-filter");
    //  select all elements with the class product and iterate through each
    document.querySelectorAll(".product").forEach((product) => {
      if (
        filter === "all" ||
        // get the value of the data-category
        product.getAttribute("data-category") === filter
      ) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
});

// DYNAMIC YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

// COUNTDOWN
// getting release date time in milliseconds
const endDate = new Date("02/14/2025");
// to convert from miliseconds
const sec = 1000;
const min = sec * 60;
const hour = min * 60;
const day = hour * 24;
// timer variable
let timer = 0;

function showRemainingTime() {
  // getting current date in milliseconds
  const currentDate = new Date();
  // finding the difference between the 2 dates in milliseconds
  const distanceDate = endDate - currentDate;

  // text that shows once timer runs out
  if (distanceDate < 0) {
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "RELEASED!";

    return;
  }

  // getting remaining days, hours, minutes and seconds converted from milliseconds
  const days = Math.floor(distanceDate / day);
  const hours = Math.floor((distanceDate % day) / hour);
  const mins = Math.floor((distanceDate % hour) / min);
  const secs = Math.floor((distanceDate % min) / sec);

  document.querySelector(
    ".countdown"
  ).innerHTML = `${days} days ${hours} hrs ${mins} mins ${secs} sec`;
}

// run function every second to update countdown
timer = setInterval(showRemainingTime, 1000);
