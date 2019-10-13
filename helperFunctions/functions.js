import APIData from '../tasks.json';

const myMethods = {
convert(dueDate) {
let go = dueDate.slice(5,7) + "/" + dueDate.slice(8,10) + "/" + dueDate.slice(0,4);
return go;
},

minDueDate() {
  // push all duedates into an array
  let length = APIData[0].tasks.length;
  let i = 0;
  let count = 0;
  let datesArray = [];
  while(i < length) {
    let dueDates = (APIData[0].tasks[i].dueDate.slice(0,4) * 365) + (APIData[0].tasks[i].dueDate.slice(5,7) * 30) + (APIData[0].tasks[i].dueDate.slice(8,10))
    datesArray.push(dueDates)
    count++
    i++;
  }
  let min = Math.min(...datesArray);
  let indexOfMin = datesArray.indexOf(String(min))

  return APIData[0].tasks[indexOfMin].dueDate;
},

maxDueDate() {
  let length = APIData[0].tasks.length;
  let i = 0;
  let count = 0;
  let datesArray = [];
  while(i < length) {
    let dueDates = (APIData[0].tasks[i].dueDate.slice(0,4) * 365) + (APIData[0].tasks[i].dueDate.slice(5,7) * 30) + (APIData[0].tasks[i].dueDate.slice(8,10))
    datesArray.push(dueDates)
    count++
    i++;
  }
  let max = Math.max(...datesArray);
  let indexOfMax = datesArray.indexOf(String(max))
  return APIData[0].tasks[indexOfMax].dueDate;
},

differenceInMaxAndMinDays(firstDate, secondDate) {
  const date1 = new Date(firstDate);
  const date2 = new Date(secondDate);
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return(diffDays);
},

calcPercent() {
  let length = APIData[0].tasks.length
  let i = 0;
  let count = 0;
  while(i < length) {
    if (APIData[0].tasks[i].taskStatusId === "Completed" || APIData[0].tasks[i].taskStatusId === "Canceled" || APIData[0].tasks[i].taskStatusId === "Incompletable") {
      count++
    }
    i++;
  }
  return (count / i * 100 + "%")
},

troubleRate() {
  let length = APIData[0].tasks.length
  let i = 0;
  let count = 0;
  while(i < length) {
    if (APIData[0].tasks[i].taskStatusId === "Delayed" || APIData[0].tasks[i].taskStatusId === "Blocked" || APIData[0].tasks[i].taskStatusId === "Stuck") {
      count++
    }
    i++;
  }
  return (count / i * 100 + "%")
},

interval(startDate) {
  startDate = new Date(startDate);

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  today = new Date(today);

  let timeDiff = (startDate.getTime() - today.getTime());
  let diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  return diffDays
}}

export default myMethods;