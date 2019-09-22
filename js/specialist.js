import fetchVisitors from './../js/visitors.js'

const savedVisitorList = fetchVisitors()

const specialistPage = () => {
  if (savedVisitorList.length > 0) {
    console.log("hello")
    document.getElementById('saved-visitor-list').innerHTML =
      `<ul>
    ${savedVisitorList.map((v) => `<li>${v.visitorNumber}
    | ${v.visitorName}
    | ${v.visitorSurname}
    | ${v.visitorSpecialist}
    | ${v.visitorTimeRegistered}</li>
    <button id="delete_visitor_btn_${v.visitorNumber}">Visitor served</button>`).join("")}
  </ul>
  `;
    savedVisitorList.forEach((v) => {
      console.log(v.visitorNumber)
      document.getElementById(`delete_visitor_btn_${v.visitorNumber}`).addEventListener('click', deleteVisitor.bind(null, v.visitorNumber), false);
    });

  } else {
    console.log("no")
    document.getElementById('saved-visitor-list').innerHTML =
      `<h1>There are no registered visitors</h1>`
  }
}

const deleteVisitor = (visitorNumber) => {
  const visitorList = fetchVisitors()
  const filteredVisitorList = visitorList.filter((v) => v.visitorNumber !== visitorNumber)
  window.localStorage.setItem('visitorListLocalStorage', JSON.stringify(filteredVisitorList))
  console.log(filteredVisitorList)
}

export default specialistPage