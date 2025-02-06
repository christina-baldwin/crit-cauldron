// TOGGLE MOBILE NAV
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// FILTER PRODUCT TYPE
document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.getAttribute("data-filter");
    document.querySelectorAll(".product").forEach((product) => {
      if (
        filter === "all" ||
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
const endDate = new Date("02/14/2025");
const sec = 1000;
const min = sec * 60;
const hour = min * 60;
const day = hour * 24;
let timer = 0;

function showRemainingTime() {
  const currentDate = new Date();
  const distanceDate = endDate - currentDate;

  if (distanceDate < 0) {
    clearInterval(timer);
    document.querySelector(".countdown").innerHTML = "RELEASED!";

    return;
  }

  const days = Math.floor(distanceDate / day);
  const hours = Math.floor((distanceDate % day) / hour);
  const mins = Math.floor((distanceDate % hour) / min);
  const secs = Math.floor((distanceDate % min) / sec);

  document.querySelector(".countdown").innerHTML = days + "days ";
  document.querySelector(".countdown").innerHTML += hours + "hrs ";
  document.querySelector(".countdown").innerHTML += mins + "mins ";
  document.querySelector(".countdown").innerHTML += secs + "sec";
}

timer = setInterval(showRemainingTime, 1000);
