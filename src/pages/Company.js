import React, { Component } from 'react';
import companies from '../data/company.json';

class Company extends Component {
  state = {
    companies: companies,
  }

  showList = (key) => {
    return (
      <li className="company-list">
        <p className="title">{key[0]}</p>
        <p className="content">{key[1]}</p>
      </li>
    )
  }

  render() {
    const { companies } = this.state;
    console.log('companies', companies)
    return (
      <div className="company">
        <h1>会社概要</h1>
        <div className="company-container">
        {
          companies.map((company, index) => {
            return (
              <div className="company-card">
                <h2>{company.corporateName[1]}</h2>
                <ul>
                  {Object.keys(company).map((keyName, i) => (
                    this.showList(company[keyName])
                  ))}
                </ul>
              </div>
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default Company
