import React, { Component } from 'react';
import companies from '../data/company.json';
import histories from '../data/history.json';

class Company extends Component {
  state = {
    companies: companies,
    histories: histories,
  }

  showCompany = (keyName, i) => {
    return (
      <li className="company-list" key={i}>
        <p className="title">{keyName[0]}</p>
        <p className="content">{keyName[1]}</p>
      </li>
    )
  }

  showHistory = (history,index) => {
    return (
      <div className="history-card">
        <p className="history-year">{history.year}年 {history.month}月</p>
        <p className="history-event">{history.event}</p>
      </div>
    )
  }

  render() {
    const { companies, histories } = this.state;
    console.log('companies', companies)
    return (
      <div className="company">
        <h2 className="company-title">会社概要</h2>
        <div className="company-container">
        {
          companies.map((company, index) => {
            return (
              <div className="company-card" key={index}>
                <h2 className="company-name">{company.corporateName[1]}</h2>
                <ul>
                  {Object.keys(company).map((keyName, i) => (
                    this.showCompany(company[keyName], i)
                  ))}
                </ul>
              </div>
            )
          })
        }
        </div>
        <h2 className="company-title">沿革</h2>
        <div className="history-container">
          {
            histories.map((history,index) => {
              return (
                this.showHistory(history, index)
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Company
