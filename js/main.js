const search = document.querySelector("#search-form");
const result = document.querySelector(".result");

search.addEventListener("submit", function (event) {
  event.preventDefault();

  setTimeout(function () {
    result.classList.add("result--active");
  }, 1000);
});

const buttonInCart = document.querySelectorAll(".button");

buttonInCart.forEach(function (item) {
  item.addEventListener("click", function () {
    this.innerText = "Добавлено";
    this.style = "background-color:#9b9b02;";
  });
});
