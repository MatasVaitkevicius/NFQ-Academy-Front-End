const NavBar = {
  render: async () => {
    const view = /*html*/ `
    <div class="menu-navbar">
      <nav>
      <a href="/">Home</a>
      <a href="/admin">Admin</a>
      <a href="/specialist">Specialist</a>
      <a href="/lightboard">Lightboard</a>
      </nav>
    </div>
    `
    return view;
  },
  after_render: async () => {},
}

export default NavBar;