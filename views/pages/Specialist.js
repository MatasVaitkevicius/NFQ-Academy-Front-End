const Specialist = {
  render: async () => {
    const view = /*html*/ `
        <h1> Specialist </h1>
`
    return view
  },
  after_render: async () => {
    document.getElementById("myBtn").addEventListener("click", () => {
      console.log('Yo')
      alert('Yo')
    })
  }
}

export default Specialist