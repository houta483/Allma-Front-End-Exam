import React from 'react';
import ReactDOM from 'react-dom';
import APIData from '../tasks.json';
import TaskCard from '../components/TaskCards';
import PercentageCompleted from '../components/PercentageComplete.js';
import TroubleRate from '../components/TroubleRate.js';
import functions from '../helperFunctions/functions'
import { bold } from 'ansi-colors';
require('./index.css');

console.log(functions)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render () {
    return (
      <div className="container">
        <div className="navbar center texting"> 
          <h3 className="horizontalFormat">
          Allma Front-End Exam
          </h3>
        </div>
        <div className="percentage marginForCards dataContainer">
          <h3 className="addMargin"> Summary Statistics </h3>
        <div className="addMargin"><PercentageCompleted daysRemaining={functions.calcPercent()}/></div>
        <div className="addMargin"><TroubleRate className="troubleRate" troubleRate={functions.troubleRate()}/></div>
        <div className="addMargin">Earliest Due Date: {functions.convert(functions.minDueDate())} </div>
        <div className="addMargin">Latest Due Date: {functions.convert(functions.maxDueDate())}</div>
        <div className="addMargin">Difference Between Earliest and Latest: {functions.differenceInMaxAndMinDays(functions.convert(functions.minDueDate()), functions.convert(functions.maxDueDate()))}</div>
        </div>
        {APIData[0].tasks.map(el =>
          <TaskCard 
            key={el.taskId}
            className={'card'}
            taskID={el.taskId}
            desc={el.description}
            dueDate={functions.convert(el.dueDate)}
            status={el.taskStatusId}
            user={el.user.firstName}
            avatar={el.user.imageUrl}
            assignedToUser={el.assignedToUser.fullName}
            assignedToAvatar={el.assignedToUser.imageUrl}
            daysUntil={functions.interval(functions.convert(el.dueDate))}
          />
        )}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)