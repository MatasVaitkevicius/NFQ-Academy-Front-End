const NavBar = {
  render: async () => {
    const view = /*html*/ `
<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link" href="/#/">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/#/admin">Admin</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/#/specialist">Specialist</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="/#/lightboard">Lightboard</a>
  </li>
</ul>
    `
    return view;
  },
  after_render: async () => {},
}

export default NavBar;