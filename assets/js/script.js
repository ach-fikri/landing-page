const toggleBtn = document.querySelector(".hamburger");
const toggleBtnIcon = document.querySelector(".hamburger i");
const dropdown = document.querySelector(".dropdown-menu");

toggleBtn.onclick = () => {
  dropdown.classList.toggle("show");
  const isShow = dropdown.classList.contains("show");

  toggleBtnIcon.classList = isShow ? "fas fa-times" : "fas fa-bars";
};
