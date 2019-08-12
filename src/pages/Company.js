import React, { Component } from 'react';
import companies from '../data/company.json';

class Company extends Component {
  state = {
    companies: companies,
  }
  render() {
    const { companies } = this.state;
    console.log('companies', companies)
    return (
      <div className="company">
        {
          companies.map((company, index) => {
            return (
              <div className="campany-card">
                <h1>{company.corporateName[1]}</h1>
                <ul>
                  <li>
                    <p className="title">{company.establishment[0]}</p>
                    <p className="content">{company.establishment[1]}</p>
                  </li>
                  <li><p>{company.president}</p></li>
                </ul>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Company
