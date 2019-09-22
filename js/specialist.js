import fetchVisitors from './../js/visitors.js'

const savedVisitorList = fetchVisitors()

const specialistPage = () => {
  if (savedVisitorList.length > 0) {
    console.log("hello")
    document.getElementById('saved-visitor-list').innerHTML =
      `<ul>
    ${savedVisitorList.map((v, i) => `<li>${v.visitorNumber = i+1}
    | ${v.visitorName}
    | ${v.visitorSurname}
    | ${v.visitorSpecialist}
    | ${v.visitorTimeRegistered}</li>
    <button type="submit" id="delete_visitor_btn">Visitor served</button>`).join("")}
  </ul>
  `;
    console.log(savedVisitorList)
  } else {
    console.log("no")
    document.getElementById('saved-visitor-list').innerHTML =
      `<h1>There are no registered visitors</h1>`
  }
}

const deleteVisitor = (e, index) => {
  e.preventDefault()
}

export default specialistPage