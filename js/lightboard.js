import fetchVisitors from './../js/visitors.js'

const showLightboard = () => {
  const savedVisitorList = fetchVisitors();
  if (savedVisitorList.length > 0) {
    console.log("hello")
    document.getElementById('show-lightboard').innerHTML =
      `<ul>
      ${savedVisitorList.map((v, i) => `<li>${v.visitorNumber = i+1}
      |${v.visitorSpecialist}</li>`).join("")}
    </ul>
  `;
    console.log(savedVisitorList)
  } else {
    console.log("no")
    document.getElementById('saved-visitor-list').innerHTML =
      `<h1>There are no registered visitors</h1>`
  }
}

export default showLightboard