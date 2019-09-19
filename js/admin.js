const addVisitors = () => {
  document.getElementById('add_visitors').innerHTML =
    `<form id="my-form">
    First name:<br>
    <input type="text" name="name">
    <br>
    Last name:<br>
    <input type="text" name="surname">`
}


export default addVisitors