import React from 'react';

export default class taskCard extends React.Component {
  render() {
    return (
      <div className="card">
        <li className='marginForCards bold'> TaskID: {this.props.taskID} </li>
        <li className='marginForCards'> Description: <div dangerouslySetInnerHTML={{__html:this.props.desc}} /> </li>
        <li className='marginForCards'> User: {this.props.user} <img src={this.props.avatar}></img> </li>
        <li className='marginForCards'> Assigned To: {this.props.assignedToUser} <img src={this.props.assignedToAvatar}></img> </li>
        <li className='marginForCards'> Due Date: {this.props.dueDate} </li>
        <li className='marginForCards'> Status: {this.props.status} </li>
        <li className='marginForCards'> Days until Due Date: {this.props.daysUntil} </li>
      </div>
    )
  }
}
