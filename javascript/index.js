window.addEventListener("scroll", function () {
  const scrollPosition = window.scrollY;
  const navbar = document.querySelector("nav");
  const navBtn = document.getElementById("nav-button");
  if (scrollPosition >= 350) {
    navbar.className = "scrollNav";
    navBtn.className = "scrollNavBtn";
  } else {
    navbar.className = "scrollNavBack";
    navBtn.className = "scrollNavBtnBack";
  }
});
