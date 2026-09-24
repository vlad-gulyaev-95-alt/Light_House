const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();


const burger = document.querySelector('.burger');
const menu = document.getElementById('mobile-menu');
const mq = window.matchMedia('(max-width: 900px)');

function setMenu(open) {
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  menu.hidden = !open;
}

burger.addEventListener('click', () => {
  setMenu(burger.getAttribute('aria-expanded') !== 'true');
});
menu.addEventListener('click', (e) => {
  if (e.target.closest('a')) setMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !menu.hidden) { setMenu(false); burger.focus(); }
});
mq.addEventListener('change', (e) => { if (!e.matches) setMenu(false); });


const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', (e) => {
    e.preventDefault();
    requestAnimationFrame(() => {
    if (document.activeElement === card) card.blur();
  });
    const target = document.getElementById(mq.matches ? 'cta-bottom' : 'cta-top');
    if (target) {
      target.scrollIntoView({
        behavior: reduceMotion.matches ? 'auto' : 'smooth',
        block: 'center',
      });
    }
  });
});
