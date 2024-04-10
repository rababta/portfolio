
function toggleMenu() { // toggle = switch
  const menu = document.querySelector(".menu-links"); //targetting an element (menu) and using a built in javascript function on it
  const icon = document.querySelector(".ham-icon");
  menu.classList.toggle("open"); // whenever we click on that element, it adds or removes the open class in that element, and that open class has some specific styling
  icon.classList.toggle("open");
}
