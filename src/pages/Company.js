import React, { Component } from 'react';
import companies from '../data/company.json';
import histories from '../data/history.json';
import Maps from './Maps'

class Company extends Component {
  state = {
    companies: companies,
    histories: histories,
  }

  showCompany = (keyName, i) => {
    return (
      <li className="company-list" key={i}>
        <p className="company-title">{keyName[0]}</p>
        <p className="company-content">{keyName[1]}</p>
      </li>
    )
  }

  showHistory = (history,index) => {
    return (
      <div className="history-card" key={index}>
        <p className="history-date">{history.year}年 {history.month}月</p>
        <p className="history-event">{history.event}</p>
      </div>
    )
  }

  render() {
    const { companies, histories } = this.state;
    return (
      <div className="company">
        <section className="company-section">
          <h2 className="title">会社概要</h2>
          <div className="company-container">
          {
            companies.map((company, index) => {
              return (
                <div className="company-card" key={index}>
                  <h3 className="company-name">{company.corporateName[1]}</h3>
                  <ul>
                    {Object.keys(company).map((keyName, i) => (
                      (keyName !== "corporateName") ? this.showCompany(company[keyName], i) : null
                    ))}
                  </ul>
                </div>
              )
            })
          }
          </div>
        </section>
        <section className="history-section">
          <h2 className="title">沿革</h2>
          <div className="history-container">
            {
              histories.map((history,index) => {
                return (
                  this.showHistory(history, index)
                )
              })
            }
          </div>
        </section>
        <section>
          <h2 className="title">事業所</h2>
          <div className="company-map">
          {/* <Maps /> */}
          </div>
        </section>
      </div>
    )
  }
}

export default Company
