import addVisitorForm from './../../js/admin.js';

const Admin = {
  render: async () => {
    const view = /*html*/
      `
    <div id="add_visitor"></div>
    <h1>Hello admin</h1>
    `
    return view
  },
  after_render: async () => {
    addVisitorForm()
  }
}

export default Admin;