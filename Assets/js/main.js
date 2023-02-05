const toggleMenu = document.querySelector(".toggle-menu");
const navbar = document.querySelector(".navbar");

toggleMenu.addEventListener("click", () => {
  const height = navbar.scrollHeight;
  const actualHeight = navbar.style.maxHeight;

  if (actualHeight === "") {
    navbar.style.maxHeight = height + "px";
  } else {
    navbar.style.maxHeight = null;
  }
});
