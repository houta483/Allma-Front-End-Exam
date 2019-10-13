import React from 'react';

export default class PercentageCompleted extends React.Component {
  render() {
    return (
      <div>
        <li> Percentage of Tasks Completed: {this.props.daysRemaining} </li>
      </div>
    )
  }
}
