import React, { Component } from 'react'
import lineups from '../data/lineup.json'

export class Details extends Component {
  render() {
    const lineup = lineups.filter(lineup => lineup.model === this.props.match.params.model)[0]
console.log('lineup', lineup)
    return (
      <div className="details">
        <h2 className="title">ラフテレーンクレーン</h2>
        <div className="detail-card">
          <div className="detail-images">
            <img className="detail-image" src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1567262614/nagao-website/inflnmyqae8hdo18ouam.jpg" alt=""/>
          </div>
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
          </div>
        </div>
        <p className="lineup-link"><a href="/lineup">保有機種一覧へ</a></p>
      </div>
    )
  }
}

export default Details
