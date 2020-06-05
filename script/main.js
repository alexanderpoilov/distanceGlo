const menuBtn = document.querySelector('.m-menu'),
  menu = document.querySelector('.menu-sidebar');

menuBtn.addEventListener('click', (event) => {
  menu.classList.toggle('active-menu');
  console.log(event.target.classList);
});