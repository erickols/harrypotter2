document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});


ScrollReveal().reveal('.hogwarts');
ScrollReveal().reveal('.house-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner', { delay: 500 });
ScrollReveal().reveal('.section-cards', { delay: 500 });