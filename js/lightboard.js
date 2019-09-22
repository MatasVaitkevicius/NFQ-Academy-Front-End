import fetchVisitors from './../js/visitors.js'

const showLightboard = () => {
  const savedVisitorList = fetchVisitors();
  savedVisitorList.sort((a, b) => (a.visitorSpecialist > b.visitorSpecialist) ? 1 :
    (a.visitorSpecialist === b.visitorSpecialist) ?
    ((a.visitorNumber > b.visitorNumber) ? 1 : -1) : -1)
  console.log(savedVisitorList)
  //savedVisitorList.sort(dynamicSortMultiple("visitorSpecialist", "visitorNumber"))
  console.log(savedVisitorList)
  if (savedVisitorList.length > 0) {
    console.log("hello")
    document.getElementById('show-lightboard').innerHTML =
      `<ul>
      ${savedVisitorList.map((v) =>
        `<li>${v.visitorNumber}
      |${v.visitorSpecialist}</li>`).join("")}
    </ul>
  `;
  } else {
    console.log("no")
    document.getElementById('saved-visitor-list').innerHTML =
      `<h1>There are no registered visitors</h1>`
  }
}

// const dynamicSort = (property) => {
//   var sortOrder = 1;
//   if (property[0] === "-") {
//     sortOrder = -1;
//     property = property.substr(1);
//   }
//   return function (a, b) {
//     /* next line works with strings and numbers,
//      * and you may want to customize it to your needs
//      */
//     var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
//     return result * sortOrder;
//   }
// }

// const dynamicSortMultiple = () => {
//   /*
//    * save the arguments object as it will be overwritten
//    * note that arguments object is an array-like object
//    * consisting of the names of the properties to sort by
//    */
//   var props = arguments;
//   return function (obj1, obj2) {
//     var i = 0,
//       result = 0,
//       numberOfProperties = props.length;
//     /* try getting a different result from 0 (equal)
//      * as long as we have extra properties to compare
//      */
//     while (result === 0 && i < numberOfProperties) {
//       result = dynamicSort(props[i])(obj1, obj2);
//       i++;
//     }
//     return result;
//   }
// }


export default showLightboard