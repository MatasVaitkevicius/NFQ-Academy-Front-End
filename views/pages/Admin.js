import addVisitorForm from './../../js/admin.js';
import specialistPage from './../../js/specialist.js';

const Admin = {
  render: async () => {
    const view = /*html*/
      `
    <div id="add_visitor"></div>
    <div id="saved-visitor-list"></div>
    <h1>Hello admin</h1>
    `
    return view
  },
  after_render: async () => {
    addVisitorForm()
    specialistPage()
  }
}

export default Admin;