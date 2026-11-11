const toggle = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('#navigation');
if (toggle && navigation) {
  const closeMenu = () => { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); };
  toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
  navigation.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape') { closeMenu(); toggle.focus(); } });
  window.matchMedia('(min-width: 960px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
}
