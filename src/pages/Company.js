import React, { Component } from 'react';
import companies from '../data/company.json';
import histories from '../data/history.json';
import Maps from './Maps'
import data from '../data/data.json'
import addresses from '../data/address.json'

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
        <section className="introduction">
          <h2 className="title">{data.introduction[0]}</h2>
          <div className="intro-container">
            <div className="intro-content">
              <p className="intro-text">
                {data.introduction[1]}
              </p>
              <h4 className="intro-name">代表 長尾享</h4>
            </div>
          </div>
        </section>
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
        <section className="csr-section">
          <h2 className="title">地域貢献</h2>
          <div className="csr-container">
            <img className="csr-img" src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1571205516/nagao-website/csr1.jpg" alt=""/>
            <img className="csr-img" src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1571205516/nagao-website/csr2.jpg" alt=""/>
          </div>
        </section>
        <section className="address-section">
          <h2 className="title">事業所</h2>
          <div className="address-container">
            {
              addresses.map((address,index) => {
                return (
                  <>
                  <h3 className="address-name">{address.name}</h3>
                  <div className="address-card">
                    {
                      address.branches.map((branch,index) => {
                        return (
                          <div className="address-branch">
                          <p>{branch.name}</p>
                          <p>{branch.address}</p>
                          <p>TEL: {branch.TEL}</p>
                          <p>FAX: {branch.FAX}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                  </>
                )
              })
            }
          {/* <Maps /> */}
          </div>
        </section>
      </div>
    )
  }
}

export default Company
