import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <section className="homepage-banner">
         <img src={require('../images/IMG_3128.JPG')} alt=""/>
        </section>
        <section className="homepage-news">
          <h2>新着一覧</h2>
        </section>
        <section className="homepage-lineup">
          <h2>充実のラインアップ</h2>
          <p>油圧式クレーンやトレーラーは最新式を揃えており、最小１２トン吊りから最大４００トン吊りの能力までの各クレーン車を約２９台取り揃えております。</p>
          <p><a href="/lineup">保有機種一覧</a></p>
        </section>
      </div>
    )
  }
}

export default Home
