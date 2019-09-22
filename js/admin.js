const addVisitorForm = () => {
  document.getElementById('add_visitor').innerHTML =
    `<form class="add_visitor_form" id="add_visitor_form">
    <label for=visitor_name>Visitor Name</label>
    <input type="text" name="visitor-name" id="visitor_name">
    <label for=visitor-surname>Visitor Surname</label>
    <input type="text" name="visitor-surname" id="visitor_surname">
    <label for=visitor-required-specialist>Visitor required specialist</label>
    <select name="visitor_required_specialist" id="visitor_required_specialist">
    <option selected="selected" value="">Select a Specialist</option>
    <option value="Doctor">Doctor</option>
    <option value="Accountant">Accountant</option>
    <option value="Lawyer">Lawyer</option>
    </select>
    <label for=register-time>Time for appointment</label>
    <input type="date" name="register-time" value="${Date.now()}" id="visitor_register_time">
    <button type="submit" id="add_visitor_btn">Add Visitor</button>
  </form>`
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
  const savedVisitorList = JSON.parse(window.localStorage.getItem('visitorListLocalStorage')) || [];
  savedVisitorList.push(visitor)
  window.localStorage.setItem('visitorListLocalStorage', JSON.stringify(savedVisitorList))
  document.getElementById("saved-visitor-list").app
}

export default addVisitorForm