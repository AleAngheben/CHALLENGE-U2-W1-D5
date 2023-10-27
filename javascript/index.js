window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const navbar = document.querySelector("nav");
  const navBtn = document.getElementById("nav-button");
  if (scrollPosition > 350) {
    navbar.classList.add("scrollNav");
    navBtn.classList.add("scrollNavBtn");
  } else {
    navbar.classList.remove("scrollNav");
    navBtn.classList.remove("scrollNavBtn");
  }
});
