import React, { Component } from 'react'

class Company extends Component {
  state = {
    title: "会社概要",
  }
  render() {
    const { title } = this.state;
    return (
      <div className="company ">
        <h2>{title}</h2>

      </div>
    )
  }
}

export default Company
