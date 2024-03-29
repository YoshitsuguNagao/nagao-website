import React, { Component } from "react";
import news from "../static/data/news.json";
import ImageGallery from "react-image-gallery";
import { Link } from "react-router-dom";

export class News extends Component {
  state = {
    images: [],
    lineup: {},
    item: {},
  };

  componentDidMount() {
    const item = news.filter(
      (item) => item.date === this.props.match.params.newsId
    )[0];
    if (item !== this.state.item) {
      this.setState({
        item,
      });
      let newImages = [];
      item.images.forEach((image) => {
        newImages.push({
          original: image,
          thumbnail: image,
        });
      });
      this.setState({ images: newImages });
    }
  }

  componentDidUpdate() {
    const item = news.filter(
      (item) => item.date === this.props.match.params.newsId
    )[0];
    if (item !== this.state.item) {
      this.setState({
        item,
      });
      let newImages = [];
      item.images.forEach((image) => {
        newImages.push({
          original: image,
          thumbnail: image,
        });
      });
      this.setState({ images: newImages });
    }
  }

  showImages = (news) => {
    if (!news.images) return null;
    if (news.images.length === 0) {
      return null;
    } else if (news.images.length === 1) {
      return (
        <div className="news-images pt30">
          <img className="news-image" src={news.images[0]} alt="" />
        </div>
      );
    } else {
      return (
        <div className="news-images pt30">
          <ImageGallery
            items={this.state.images}
            showBullets={true}
            showIndex={false}
            showThumbnails={true}
            lazyLoad={true}
            showPlayButton={false}
            showFullscreenButton={false}
            autoPlay={true}
            slideInterval={5000}
          />
        </div>
      );
    }
  };

  render() {
    const item = news.filter(
      (item) => item.date === this.props.match.params.newsId
    )[0];
    return (
      <div className="news main-container">
        <section className="wrap">
          <h2 className="main-header">News</h2>
          <div className="news-container">
            <div className="news-sidebar">
              <h3 className="news-title">新着一覧</h3>
              {news.map((item, index) => {
                return (
                  <div className="news-sidebar-container" key={index}>
                    <p className="news-sidebar-date">{item.date}</p>
                    <p className="news-sidebar-title">
                      <Link to={`/news/${item.date}`}>{item.title}</Link>
                    </p>
                  </div>
                );
              })}
            </div>
            {item ? (
              <div className="news-contents">
                <h3 className="news-title">{item.title}</h3>
                <p className="news-content">{item.content}</p>
                {this.showImages(item)}
              </div>
            ) : (
              <div className="news-contents">
                <h3 className="news-title">該当するニュースがありません</h3>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default News;
