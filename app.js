import NavBar from './views/components/NavBar.js';

const routes = {
  '/': import('./views/pages/Home.js'),
  '/admin': import('./views/pages/Admin.js'),
  '/specialist': import('./views/pages/Specialist.js'),
  '/lightboard': import('./views/pages/Lightboard.js'),
};

const router = async () => {
  const navBar = null || document.getElementById('navbar_container');
  console.log(navBar)
  console.log(NavBar)
  const [NAVBAR] = await Promise.all([
    NavBar.render(),
  ]);

  navBar.innerHTML = NAVBAR;
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);