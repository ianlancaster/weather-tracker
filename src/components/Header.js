import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <button className="settings-button">Settings</button>
        <h1> { this.props.city || 'City' } </h1>
        <button className="dropdown-button">DropDown</button>
      </div>
    );
  }
}

module.exports = Header;
