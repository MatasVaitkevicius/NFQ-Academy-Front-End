import addVisitors from './../../js/admin.js'

const Admin = {
  render: async () => {
    const view = /*html*/ `
    <div id="add_visitors"></div>
    <h1>Hello admin</h1>
    `
    return view
  },
  after_render: async () => {
    addVisitors()
  }
}

export default Admin;