import addVisitorForm from './../../js/admin.js';
import specialistPage from './../../js/specialist.js';

const Admin = {
  render: async () => {
    const view = /*html*/
      `
    <div class="form-group"" id="add_visitor"></div>
    <ul class="list-group" id="saved-visitor-list"></ul>
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