const btnMenu = document.querySelector('.btn-menu');
const sidebar = document.querySelector('.sidebar-container');


btnMenu.addEventListener('click', () => {
    sidebar.classList.toggle('hidden');
});

const optionYoutube = document.querySelector('.option-youtube');



const btndarkmode = document.querySelector('.btndarkmode');
const darkmode = document.querySelector('.darkmode');


btndarkmode.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    darkmode.classList.toggle('ri-moon-line');
    darkmode.classList.toggle('ri-sun-line');
    
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 10,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });