const parentBar = document.querySelector(".bar-parent");
const childCategory = document.getElementById("child-categ");
const subContainer = document.querySelectorAll(".sub-container");
const childBar = document.querySelectorAll(".child-bar");
const barIcon = document.querySelectorAll("i");
console.log(childBar, subContainer);
childBar.forEach((bar, index) => {
  bar.addEventListener("click", (e) => {
    console.log("sdjbl");
    subContainer[index].classList.toggle("deactive");
    barIcon[index + 1].classList.toggle("fa-xmark");
  });
});

parentBar.addEventListener("click", () => {
  childCategory.classList.toggle("deactive");
  if (barIcon[0].classList.contains("fa-xmark")) {
    barIcon[0].classList.replace("fa-xmark", "fa-bars");
  }
});
