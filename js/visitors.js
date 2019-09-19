import VisitorsList from './../visitorsList.js'

const fetchVisitors = () => {

  VisitorsList.forEach(v => console.log(v))

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

export default fetchVisitors