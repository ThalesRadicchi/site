// Menu 
const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");

hamburguer.addEventListener("click", () => nav.classList.toggle("active"));



// Filtro projetos e certificado
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.certificado-skills');
  const items = document.querySelectorAll('.certificado-certificados');

  filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
          const filter = button.getAttribute('data-filter');

          items.forEach(function (item) {
              if (filter === 'all' || item.classList.contains(filter)) {
                  item.style.display = 'flex';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.projeto-skills');
  const items = document.querySelectorAll('.projeto-certificados');

  filterButtons.forEach(function (button) {
      button.addEventListener('click', function () {
          const filter = button.getAttribute('data-filter');

          items.forEach(function (item) {
              if (filter === 'all' || item.classList.contains(filter)) {
                  item.style.display = 'flex';
              } else {
                  item.style.display = 'none';
              }
          });
      });
  });
});



// Drag
let isDown = false;
let startX;
let scrollLeft;
const slider = document.querySelector('.items-drag');

const end = () => {
	isDown = false;
  slider.classList.remove('active');
}

const start = (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;	
}

const move = (e) => {
	if(!isDown) return;

  e.preventDefault();
  const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
  const dist = (x - startX);
  slider.scrollLeft = scrollLeft - dist;
}

(() => {
	slider.addEventListener('mousedown', start);
	slider.addEventListener('touchstart', start);

	slider.addEventListener('mousemove', move);
	slider.addEventListener('touchmove', move);

	slider.addEventListener('mouseleave', end);
	slider.addEventListener('mouseup', end);
	slider.addEventListener('touchend', end);
})();

// Limpando os campos depois de enviar o formulário

window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}