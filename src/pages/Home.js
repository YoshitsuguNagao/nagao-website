import React, { Component } from 'react'
import news from '../data/news.json'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <section className="homepage-banner">
         <img src={require('../images/home1.jpg')} alt=""/>
        </section>
        <section className="homepage-news">
          <h2 className="title">新着一覧</h2>
          <div className="news-container">
            {
              news.map((item,index) => {
                return (
                  <div className="each-news">
                    <p className="news-date">{item.date}</p>
                    <p className="news-content">{item.content}</p>
                  </div>
                )
              })
            }
          </div>
        </section>
        <section className="homepage-lineup">
          <h2 className="title">充実のラインアップ</h2>
          <div className="lineup-container">
            <div className="lineup-text">
              <p>油圧式クレーンやトレーラーは最新式を揃えており、最小１２トン吊りから最大４００トン吊りの能力までの各クレーン車を約２９台取り揃えております。</p>
              <p className="lineup-link"><a href="/lineup">保有機種一覧</a></p>
            </div>
            <img className="lineup-img" src={require('../images/home2.JPG')} alt=""/>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
