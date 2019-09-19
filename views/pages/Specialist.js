import fetchVisitors from './../../js/visitors.js';

const Specialist = {
  render: async () => {
    const view = /*html*/ `
        <div id="visitors_list"></div>
        <h1> Specialist </h1>`
    return view
  },
  after_render: async () => {
    // document.getElementById("myBtn").addEventListener("click", () => {
    //   console.log('Yo')
    //   alert('Yo')
    // })
    fetchVisitors();
  }
}

export default Specialist