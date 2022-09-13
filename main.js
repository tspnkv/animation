window.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const closeMenu = document.querySelector('.close');

  const newTL = gsap.timeline();
  burger.addEventListener('click', () => {
    menu.classList.add('menu--open');

    newTL.add(gsap.from('.menu__top', { y: -300, opacity:0, duration: .5}));
    newTL.add(gsap.from('.menu__container', { opacity:0, y: 100, duration: 1}));
    newTL.add(gsap.from('.menu__right', {  opacity:0, y: 100, duration: 1.5}), gsap.from('.social', { opacity: 0, y: 100, duration: 1.5}));
  });

  closeMenu.addEventListener('click', () => {
    newTL.reverse();
    setTimeout(() => {
      menu.classList.remove('menu--open');
    }, 1000);
  });


  const newTL2 = gsap.timeline();

  newTL2.add(gsap.from('.hero__title', { opacity:0, y: 100, duration: 1 }), gsap.from('.hero__btn', {  opacity:0, y: 100, duration: 1  }));
  newTL2.add(gsap.from('.hero__descr', { opacity:0,  duration: 5 }));
  newTL2.add(gsap.from('.photos-wrap', { opacity:0, duration: 5}), gsap.from('.photos__author', {  opacity:0, duration: 5 }));
})
