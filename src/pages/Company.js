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
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1088.5711297807525!2d138.1485851500282!3d34.63316777768507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xfa8331789715c191!2z77yI5qCq77yJ6ZW35bC-44Os44OD44Kr44O8!5e0!3m2!1sen!2ses!4v1566062843214!5m2!1sen!2ses" width="600" height="450" frameborder="0" allowfullscreen></iframe> */}
          </div>
        </section>
      </div>
    )
  }
}

export default Company
