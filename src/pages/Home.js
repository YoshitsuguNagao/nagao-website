import React, { Component } from 'react'
import news from '../data/news.json'
import Carousel from 'react-bootstrap/Carousel'

class Home extends Component {
  render() {
    return (
      <div className="home">
        <section className="homepage-banner">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../images/home3.jpg')}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>ATF-400G-6</h1>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../images/home1.jpg')}
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>ATF-100G-4</h1>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require('../images/home2.JPG')}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>12ton ~ 400tonのクレーン</h1>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
         {/* <img src={require('../images/home1.jpg')} alt=""/> */}
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
        <section className="homepage-pickup">
          <h2 className="title">ピックアップ！</h2>
          <div className="pickup-container">
            <div className="pickup-card">
              <img className="pickup-img" src={require('../images/home2.JPG')} alt=""/>
              <p>スカイボックス</p>
            </div>
            <div className="pickup-card">
              <img className="pickup-img" src={require('../images/home2.JPG')} alt=""/>
              <p>トレーラー</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
