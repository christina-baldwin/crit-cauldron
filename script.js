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
