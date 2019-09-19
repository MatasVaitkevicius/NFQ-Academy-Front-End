import VisitorsList from './../visitorsList.js'

const fetchVisitors = () => {
  document.getElementById('visitors_list').innerHTML =
    `<ul>
    ${VisitorsList.map(v => `<li>${v.visitorId}
    | ${v.visitorName}
    | ${v.visitorSurname}
    | ${v.requiredSpecialist}
    | ${v.timeRegistered}</li>`).join("")}
  </ul>
`;
}
// document.getElementById('add_visitor_btn')
//   .addEventListener('click', addNewVisitorClick.bind(), false)

export default fetchVisitors