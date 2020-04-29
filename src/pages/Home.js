import React, { Component } from 'react'
import news from '../data/news.json'
import Carousel from 'react-bootstrap/Carousel'

class Home extends Component {
  render() {
    return (
      <main className="home main-container">
        <section className="homepage-banner">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='https://res.cloudinary.com/yoshitsugunagao/image/upload/v1588133447/nagao-website/banner/banner4n.jpg'
                alt="First slide"
              />
              <Carousel.Caption>
                <h1>ATF-400G-6</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='https://res.cloudinary.com/yoshitsugunagao/image/upload/v1588133417/nagao-website/banner/banner3n.jpg'
                alt="Second slide"
              />
              <Carousel.Caption>
                <h1>ATF-100G-4</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='https://res.cloudinary.com/yoshitsugunagao/image/upload/v1588133292/nagao-website/banner/banner1n.jpg'
                alt="Third slide"
              />
              <Carousel.Caption>
                <h1>12ton ~ 400tonのクレーン</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src='https://res.cloudinary.com/yoshitsugunagao/image/upload/v1588139613/nagao-website/banner/banner5n.jpg'
                alt="Firth slide"
              />
              <Carousel.Caption>
                {/* <h1></h1> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </section>
        <section className="homepage-news wrap">
          <h2 className="main-header">新着一覧</h2>
          {
            news.map((item,index) => {
              return (
                <div className="each-news m-2" key={index}>
                  <p className="homepage-news-date">{item.date}</p>
                  <p><a href={`/news/${item.date}`}>{item.title}</a></p>
                </div>
              )
            })
          }
        </section>
        <section className="homepage-lineup wrap">
          <h2 className="main-header">充実のラインアップ</h2>
          <div className="lineup-container">
            <div className="lineup-text">
              <p>油圧式クレーンやトレーラーは最新式を揃えており、最小１２トン吊りから最大４００トン吊りの能力までの各クレーン車を取り揃えております。</p>
              <p className="lineup-link text-right"><a href="/lineup">保有機種一覧</a></p>
            </div>
            <img className="lineup-img" src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1567262614/nagao-website/g15hejsxalljd15frjp4.jpg" alt=""/>
          </div>
        </section>
        <section className="homepage-pickup wrap">
          <h2 className="main-header">ピックアップ！</h2>
          <div className="pickup-container">
            <div className="pickup-card">
              <a href="/lineup/SS-150">
                <img className="pickup-img" src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1569788773/nagao-website/skybox_sq.jpg" alt=""/>
                <p className="pickup-title text-center mt10">
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
                <p className="pickup-title text-center mt10">
                  CADによる施工計画
                </p>
              </a>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Home
