import NavBar from './views/components/NavBar.js';
import Utils from './utils/index.js'

const routes = {
  '/': import('./views/pages/Home.js'),
  '/admin': import('./views/pages/Admin.js'),
  '/specialist': import('./views/pages/Specialist.js'),
  '/lightboard': import('./views/pages/Lightboard.js'),
  '/404': import('./views/pages/fourOFour.js'),
};

const router = async () => {
  const navBar = null || document.getElementById('navbar_container');
  const content = null || document.getElementById('page_container');
  const request = Utils.parseRequestURL()
  const parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
  const page = routes[parsedURL] ? routes[parsedURL] : fourOFour;
  const [NAVBAR, PAGE] = await Promise.all([
    NavBar.render(),
    page.then(p => p.default.render()),
  ]);

  navBar.innerHTML = NAVBAR;
  content.innerHTML = PAGE;

  await Promise.all([
    page.then(p => p.default.after_render()),
  ]);
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);