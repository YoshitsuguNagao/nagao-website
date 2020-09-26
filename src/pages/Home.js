import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel'
import news from '../data/news.json'

const banners = [{
  src: "https://res.cloudinary.com/yoshitsugunagao/image/upload/v1599392140/nagao-website/banner/banner6n.jpg",
  alt: "slide1",
  title: "新機種導入！"
},
{
  src: "https://res.cloudinary.com/yoshitsugunagao/image/upload/v1588133447/nagao-website/banner/banner4n.jpg",
  alt: "slide2",
  title: "ATF-400G-6"
},
{
  src: "https://res.cloudinary.com/yoshitsugunagao/image/upload/v1588133417/nagao-website/banner/banner3n.jpg",
  alt: "slide3",
  title: "ATF-100G-4"
},
{
  src: "https://res.cloudinary.com/yoshitsugunagao/image/upload/v1588133292/nagao-website/banner/banner1n.jpg",
  alt: "slide4",
  title: "12ton ~ 400tonのクレーン"
},
{
  src: "https://res.cloudinary.com/yoshitsugunagao/image/upload/v1588139613/nagao-website/banner/banner5n.jpg",
  alt: "slide5",
  title: ""
}]

class Home extends Component {
  CarouselItem = (item) => {
    return (
      <Carousel.Item>
        <img className="d-block w-100" src={item.src} alt={item.alt}
        />
        <Carousel.Caption>
          <h1>{item.title}</h1>
        </Carousel.Caption>
      </Carousel.Item>
    )
  }

  render() {
    return (
      <main className="home main-container">
        <section className="homepage-banner">
          <Carousel>
            {banners.map((banner, index) => {
              return this.CarouselItem(banner)
            })}
          </Carousel>
        </section>
        <section className="homepage-news wrap">
          <h2 className="main-header">新着一覧</h2>
          <div className="home-news-list">
            {
              news.map((item, index) => {
                return (
                  index < 3 ?
                    <div className="news-item m-2" key={index}>
                      <p className="home-news-date">{item.date}</p>
                      <p><Link to={`/news/${item.date}`}>{item.title}</Link></p>
                    </div>
                    : null
                )
              })
            }
            <p className="text-right"><Link to={`/news/${news[0].date}`}>過去のニュース ＞</Link></p>
          </div>
        </section>
        <section className="homepage-lineup wrap">
          <h2 className="main-header">充実のラインアップ</h2>
          <div className="lineup-container">
            <div className="lineup-text">
              <p>油圧式クレーンやトレーラーは最新式を揃えており、最小１２トン吊りから最大４００トン吊りの能力までの各クレーン車を取り揃えております。</p>
              <p className="lineup-link text-right"><Link to="/lineup">保有機種一覧 ＞</Link></p>
            </div>
            <img className="lineup-img" src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1567262614/nagao-website/g15hejsxalljd15frjp4.jpg" alt=""/>
          </div>
        </section>
        <section className="homepage-pickup wrap">
          <h2 className="main-header">ピックアップ！</h2>
          <div className="pickup-container">
            <div className="pickup-card">
              <Link to="/lineup/SS-150">
                <img className="pickup-img" src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1569788773/nagao-website/skybox_sq.jpg" alt=""/>
                <p className="pickup-title text-center mt10">
                  スカイボックス
                </p>
              </Link>
            </div>
            {/* <div className="pickup-card">
              <Link to="/large-vehicles">
                <img className="pickup-img" src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1569756237/nagao-website/trucks_sq.jpg" alt=""/>
                <p className="pickup-title">
                  大型車両
                </p>
              </Link>
            </div> */}
            <div className="pickup-card">
              <Link to="/cad">
                <img className="pickup-img" src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1569756256/nagao-website/drawing_sq.jpg" alt=""/>
                <p className="pickup-title text-center mt10">
                  CADによる施工計画
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

export default Home
