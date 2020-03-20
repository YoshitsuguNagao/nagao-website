import React, { Component } from 'react'
import lineups from '../data/lineup.json'

export class Details extends Component {
  render() {
    const lineup = lineups.filter(lineup => lineup.model === this.props.match.params.model)[0]
    return (
      <div className="details">
        <h2 className="title">{lineup.type2}</h2>
        <div className="detail-card">
          {
            lineup.images[0] ?
            <div className="detail-images">
              <img className="detail-image" src={lineup.images[0]} alt=""/>
            </div> :
            <div className="no-image">
                <p>no image<br></br>avarable</p>
            </div>
          }
          <div className="detail-contents">
            <h3 className="detail-model">{lineup.model}</h3>
            {
              lineup.details.map(item => {
                return (
                  <div className="detail-item">
                    <p className="detail-title">{item.title}</p>
                    <p className="detail-content">{item.content}</p>
                  </div>
                )
              })
            }
            {
              lineup.link
              ? <div className="detail-item">
                  <p className="detail-title">備考</p>
                  <p className="detail-content">
                    <a href={lineup.link}>メーカー製品ページ</a>
                  </p>
                </div>
              : null
            }
          </div>
        </div>
        <p className="lineup-link"><a href="/lineup">保有機種一覧へ</a></p>
      </div>
    )
  }
}

export default Details
