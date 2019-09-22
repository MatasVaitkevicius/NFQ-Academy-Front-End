import fetchVisitors from './../js/visitors.js'

const savedVisitorList = fetchVisitors()

const specialistPage = () => {
  if (savedVisitorList.length > 0) {
    console.log("hello")
    document.getElementById('saved-visitor-list').innerHTML = `
    ${savedVisitorList.map((v) => `
    <li class="list-group-item" id="visitor_${v.visitorNumber}">Nr.${v.visitorNumber}
    <label for="visitor_name">Name:</label>
    ${v.visitorName}
    <label for="visitor_surname">Surname</label>
    ${v.visitorSurname}
    <label for="visitor_specialist">Required Specialist</label>
    ${v.visitorSpecialist}
    <label for="visitor_time_registered">Time for appointment</label>
    ${v.visitorTimeRegistered}
    <button class="btn btn-success" id="delete_visitor_btn_${v.visitorNumber}">Visitor served</button></li>`).join("")}
  `;
    savedVisitorList.forEach((v) => {
      console.log(v.visitorNumber)
      document.getElementById(`delete_visitor_btn_${v.visitorNumber}`).addEventListener('click', deleteVisitor.bind(null, v.visitorNumber), false);
      document.getElementById(`visitor_required_specialist`).addEventListener('click', filterBySpecialist.bind(null), false);
    });

  } else {
    console.log("no")
    document.getElementById('saved-visitor-list').innerHTML =
      `<h1>There are no registered visitors</h1>`
  }
}

const filterBySpecialist = () => {

}

const deleteVisitor = (visitorNumber) => {
  const visitorList = fetchVisitors()
  const filteredVisitorList = visitorList.filter((v) => v.visitorNumber !== visitorNumber)
  window.localStorage.setItem('visitorListLocalStorage', JSON.stringify(filteredVisitorList))
  document.getElementById(`visitor_${visitorNumber}`).remove()
  console.log(filteredVisitorList)
}

export default specialistPage