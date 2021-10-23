import React, { Component } from "react";
import { Link } from "react-router-dom";
import lineups from "../static/data/lineup.json";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export class Details extends Component {
  state = {
    images: [],
    lineup: {},
  };

  showImages = (lineup) => {
    if (!lineup.images) return null;
    if (lineup.images.length === 0) {
      return (
        <div className="no-image">
          <p>
            no image<br></br>avarable
          </p>
        </div>
      );
    } else if (lineup.images.length === 1) {
      return (
        <div className="detail-images">
          <img className="detail-image" src={lineup.images[0]} alt="" />
        </div>
      );
    } else {
      lineup.images.forEach((image) => {
        this.state.images.push({
          original: image,
          thumbnail: image,
        });
      });
      return (
        <div className="detail-images">
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
  componentDidMount() {
    const lineup = lineups.filter(
      (lineup) => lineup.model === this.props.match.params.model
    )[0];
    this.setState({
      lineup,
    });
  }

  render() {
    const { lineup } = this.state;
    if (!lineup) return null;
    return (
      <div className="details main-container">
        <section className="wrap">
          <h2 className="main-header">{lineup.type2}</h2>
          <div className="detail-card">
            {this.showImages(lineup)}
            <div className="detail-contents">
              <h3 className="detail-model">{lineup.model}</h3>
              {lineup.details
                ? lineup.details.map((item) => {
                    return (
                      <div className="detail-item">
                        <p className="detail-title">{item.title}</p>
                        {item.link ? (
                          <p className="detail-content">
                            <a href={item.link}>{item.content}</a>
                          </p>
                        ) : (
                          <p className="detail-content">{item.content}</p>
                        )}
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <p className="lineup-link text-right">
            <Link to="/lineup">保有機種一覧へ</Link>
          </p>
        </section>
      </div>
    );
  }
}

export default Details;
