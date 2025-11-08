

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("nav-color");
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
});
