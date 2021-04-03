import React, { Component } from 'react';
import companies from '../static/data/company.json';
import histories from '../static/data/history.json';
// import Maps from './Maps'
import data from '../static/data/data.json'
import addresses from '../static/data/address.json'

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
      <div className="company main-container">
        <section className="introduction wrap">
          <h2 className="main-header">{data.introduction[0]}</h2>
          <div className="intro-container">
            <div className="intro-content">
              <p className="intro-text">
                {data.introduction[1]}
              </p>
              <h4 className="intro-name pt-4">代表 長尾享</h4>
            </div>
          </div>
        </section>
        <section className="company-section wrap">
          <h2 className="main-header">会社概要</h2>
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
        <section className="history-section wrap">
          <h2 className="main-header">沿革</h2>
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
        <section className="csr-section wrap">
          <h2 className="main-header">地域貢献</h2>
          <div className="csr-container">
            <p>初倉まつり2018に参加。静岡県重機建設業工業組合青年部の一員として地域の子供たちに建設機械と触れ合ってもらいました。</p>
            <div className="csr-img-container">
              <img className="csr-img p-4" src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1571205516/nagao-website/csr1.jpg" alt=""/>
              <img className="csr-img p-4" src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1571205516/nagao-website/csr2.jpg" alt=""/>
            </div>
          </div>
        </section>
        <section className="address-section wrap">
          <h2 className="main-header">事業所</h2>
          <div className="address-container">
            {
              addresses.map((address,index) => {
                return (
                  <React.Fragment key={`${address.name}${index}`}>
                    <h3 className="address-name p-2">{address.name}</h3>
                    <div className="address-card">
                    {
                      address.branches.map((branch,idx) => {
                        return (
                          <React.Fragment key={`${branch.name}${index}${idx}`}>
                            <div className="address-branch p-2">
                              <h4>{branch.name}</h4>
                              <p>{branch.postcode}</p>
                              <p>{branch.address}</p>
                              <p>TEL: {branch.TEL}</p>
                              <p>FAX: {branch.FAX}</p>
                            </div>
                          </React.Fragment>
                        )
                      })
                    }
                    </div>
                  </React.Fragment>
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
