import fetchVisitors from './../js/visitors.js'

const showLightboard = () => {
  const savedVisitorList = fetchVisitors();
  savedVisitorList.sort((a, b) => (a.visitorSpecialist > b.visitorSpecialist) ? 1 :
    (a.visitorSpecialist === b.visitorSpecialist) ?
    ((a.visitorNumber > b.visitorNumber) ? 1 : -1) : -1)
  console.log(savedVisitorList)
  if (savedVisitorList.length > 0) {
    console.log("hello")
    document.getElementById('show-lightboard').innerHTML =
      `<ul class="list-group">
      ${savedVisitorList.map((v) =>
        `<li class="list-group-item active">Nr.${v.visitorNumber}</li>
         <li class="list-group-item">${v.visitorSpecialist}</li>`).join("")}
    </ul>
  `;
  } else {
    console.log("no")
    document.getElementById('saved-visitor-list').innerHTML =
      `<h1>There are no registered visitors</h1>`
  }
}

export default showLightboard