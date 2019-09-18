const Lightboard = {
  render: async () => {
    const view = /*html*/ `<h1>Hello lightboard</h1>`
    console.log(view)
    return view
  },
  after_render: async () => {}
}

export default Lightboard