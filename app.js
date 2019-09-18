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
  console.log(navBar)
  const request = Utils.parseRequestURL()
  console.log(request)
  const parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
  const page = routes[parsedURL] ? routes[parsedURL] : fourOFour;
  console.log(content)
  const [NAVBAR, PAGE] = await Promise.all([
    NavBar.render(),
    page.then(p => p.default.render()),
  ]);

  navBar.innerHTML = NAVBAR;
  content.innerHTML = PAGE;

}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);