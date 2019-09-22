import showLightboard from './../../js/lightboard.js';


const Lightboard = {
  render: async () => {
    const view = /*html*/ `
    <h2>Line of People:</h2>
    <div id="show-lightboard"></div>
    <h1>Hello lightboard</h1>`
    return view
  },
  after_render: async () => {
    showLightboard()
  }
}

export default Lightboard