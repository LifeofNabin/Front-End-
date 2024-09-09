const stars = document.querySelectorAll(".star1");
const ratingh4 = document.querySelectorAll(".rating");

stars.forEach((star1, index) => {
  star1.addEventlistener("click", () => {
    for (let i = 0; i < stars.length; i++) {
      if (i <= index) {
        stars[i].style.background = "green";
      } else {
        stars[i].style.background = "white";
      }
    }
    ratingh4.innerText = `${index + 1} star`;
  });
});
