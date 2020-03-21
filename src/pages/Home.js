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
              src='https://res.cloudinary.com/yoshitsugunagao/image/upload/v1569616103/nagao-website/banner4.jpg'
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>ATF-400G-6</h1>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='https://res.cloudinary.com/yoshitsugunagao/image/upload/v1569616105/nagao-website/banner3.jpg'
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>ATF-100G-4</h1>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='https://res.cloudinary.com/yoshitsugunagao/image/upload/v1569616103/nagao-website/banner1.jpg'
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>12ton ~ 400tonのクレーン</h1>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src='https://res.cloudinary.com/yoshitsugunagao/image/upload/v1569616102/nagao-website/banner2.jpg'
              alt="Firth slide"
            />
            <Carousel.Caption>
              <h1>様々な作業</h1>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
         {/* <img src={require('../images/home1.jpg')} alt=""/> */}
        </section>
        <section className="homepage-news">
          <h2 className="title">新着一覧</h2>
          {
            news.map((item,index) => {
              return (
                <div className="each-news" key={index}>
                  <p className="homepage-news-date">{item.date}</p>
                  <p className="homepage-news-content"><a href={`/news/${item.date}`}>{item.title}</a></p>
                </div>
              )
            })
          }
        </section>
        <section className="homepage-lineup">
          <h2 className="title">充実のラインアップ</h2>
          <div className="lineup-container">
            <div className="lineup-text">
              <p>油圧式クレーンやトレーラーは最新式を揃えており、最小１２トン吊りから最大４００トン吊りの能力までの各クレーン車を約２９台取り揃えております。</p>
              <p className="lineup-link"><a href="/lineup">保有機種一覧</a></p>
            </div>
            <img className="lineup-img" src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1567262614/nagao-website/g15hejsxalljd15frjp4.jpg" alt=""/>
          </div>
        </section>
        <section className="homepage-pickup">
          <h2 className="title">ピックアップ！</h2>
          <div className="pickup-container">
            <div className="pickup-card">
              <a href="/skybox">
                <img className="pickup-img" src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1569788773/nagao-website/skybox_sq.jpg" alt=""/>
                <p className="pickup-title">
                  スカイボックス
                </p>
              </a>
            </div>
            {/* <div className="pickup-card">
              <a href="/large-vehicles">
                <img className="pickup-img" src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1569756237/nagao-website/trucks_sq.jpg" alt=""/>
                <p className="pickup-title">
                  大型車両
                </p>
              </a>
            </div> */}
            <div className="pickup-card">
              <a href="/cad">
                <img className="pickup-img" src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1569756256/nagao-website/drawing_sq.jpg" alt=""/>
                <p className="pickup-title">
                  CADによる施工計画
                </p>
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
