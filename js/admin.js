const addVisitorForm = () => {
  document.getElementById('add_visitor').innerHTML =
    `<form id="add_visitor_form">
    <label for=visitor_name>Visitor Name</label>
    <input type="text" name="visitor-name" id="visitor_name">
    <label for=visitor-surname>Visitor Surname</label>
    <input type="text" name="visitor-surname" id="visitor_surname">
    <label for=visitor-required-specialist>Visitor required specialist</label>
    <input type="text" name="visitor-required-specialist" id="visitor_required_specialist">
    <label for=register-time>Time for appointment</label>
    <input type="date" name="register-time" value="${Date.now()}" id="visitor_register_time">
    <button type="submit" id="add_visitor_btn">Add Visitor</button>
  </form>`
  //var form = document.getElementById("add_visitor_form");
  document.getElementById("add_visitor_btn").addEventListener('click', addNewVisitorClick.bind(event));
}

const addNewVisitorClick = (e) => {
  e.preventDefault()
  var visitorList = [];
  const visitorName = document.getElementById('visitor_name').value
  const visitorSurname = document.getElementById('visitor_surname').value
  const visitorSpecialist = document.getElementById('visitor_required_specialist').value
  const visitorTimeRegistered = document.getElementById('visitor_register_time').value
  const visitorCounter = Number(window.localStorage.getItem('visitorCounterLocalStorage')) || 0
  const visitor = {
    visitorName,
    visitorSurname,
    visitorSpecialist,
    visitorTimeRegistered,
    visitorNumber: visitorCounter + 1,
  }
  window.localStorage.setItem('visitorCounterLocalStorage', visitor.visitorNumber)
  // window.localStorage.clear()
  const savedVisitorList = JSON.parse(window.localStorage.getItem('visitorListLocalStorage')) || [];
  savedVisitorList.push(visitor)
  window.localStorage.setItem('visitorListLocalStorage', JSON.stringify(savedVisitorList))
  //savedVisitorList.push(visitor)
  console.log(savedVisitorList)
  // window.localStorage.clear()
}

export default addVisitorForm