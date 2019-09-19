import fetchVisitors from './../../js/visitors.js';


const Lightboard = {
  render: async () => {
    const view = /*html*/ `
    <div id="visitors_list"></div>
    <h1>Hello lightboard</h1>`
    return view
  },
  after_render: async () => {
    fetchVisitors()
  }
}

export default Lightboard