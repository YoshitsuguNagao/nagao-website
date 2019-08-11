import React, { Component } from 'react';
import compamny from '../data/company.json';

class Company extends Component {
  state = {
    title: "会社概要",
  }
  render() {
    const { title } = this.state;
    return (
      <div className="company ">
        <h2>{title}</h2>
        <ul>
          <li></li>
        </ul>
      </div>
    )
  }
}

export default Company
