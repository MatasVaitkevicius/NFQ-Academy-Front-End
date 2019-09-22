import specialistPage from './../../js/specialist.js';

const Specialist = {
  render: async () => {
    const view = /*html*/ `
        <div id="saved-visitor-list"></div>
        <h1> Specialist </h1>`
    return view
  },
  after_render: async () => {
    // document.getElementById("myBtn").addEventListener("click", () => {
    //   console.log('Yo')
    //   alert('Yo')
    // })
    specialistPage();
  }
}

export default Specialist