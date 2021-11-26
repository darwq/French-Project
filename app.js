// VARIABLES
let lastScrollPosition = 0;

// EVENT LISTENERS

document.addEventListener("scroll", (e) => {
  let scrollPosition = window.scrollY;

  if (scrollPosition > lastScrollPosition - 1) {
    $(".menu").hide(200);
  } else {
    $(".menu").show(200);
  }

  lastScrollPosition = scrollPosition;
});
