document.querySelector(".btn").addEventListener("click", (e) => {

  document.body.classList.add("animate");
  document.querySelector(".btn").addEventListener("transitionend", (e) => {
    if (e.elapsedTime === 1) document.body.classList.remove("animate");
    document.body.classList.remove("animate");
  });
});
