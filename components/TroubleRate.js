import React from 'react';

export default class TroubleRate extends React.Component {
  render() {
    return (
      <div>
        <li> Trouble Rate: {this.props.troubleRate} </li>
      </div>
    )
  }
}
