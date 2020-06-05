const menuBtn = document.querySelector('.m-menu'),
  menu = document.querySelector('.menu-sidebar');

menuBtn.addEventListener('click', () => {
  let target = event.target;
  menu.classList.toggle('active-menu');
  console.log('target', target.classList);
  console.log('click');
});