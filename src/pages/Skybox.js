import React, { Component } from 'react'
import lineups from '../data/lineup.json'
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

class Skybox extends Component {
  state = {
    images: [],
    lineup: {}
  }

  showImages = (lineup) => {
    if (!lineup.images) return null
    lineup.images.forEach(image => {
      this.state.images.push({
        original: image,
        thumbnail: image
      })
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
    )
  }
  componentDidMount() {
    const lineup = lineups.filter(lineup => lineup.model === "SS-150")[0]
    this.setState({
      lineup
    })
  }

  render() {
    const { lineup } = this.state;
    if (!lineup) return null
    console.log("object", lineup)
    return (
      <div className="skybox main-container">
        <section className="wrap">
          <h2 className="main-header">Skybox</h2>
          <p className="mb30">
            Skyboxとは、移動式クレーンに先端に装着する作業デッキで、従来の高所作業車では出来ない範囲をカバーする事ができます。
            弊社の所有しているATF220G-5に装着する事で高さ86mの作業が可能になります。
            通常の高所作業車では届かない作業（風力発電の点検等）にとても便利です。
          </p>
          <div className="detail-card">
            {
              this.showImages(lineup)
            }
            <div className="detail-contents">
              <h3 className="detail-model">取り付け可能機種</h3>
              <ul className="available-type">
                <li>ATF220G-5</li>
                <li>ATF100G-4</li>
                <li>GR-700N</li>
                <li>GR-600N</li>
                <li>GR-250N</li>
              </ul>
              <h3 className="detail-model title">仕様</h3>
              {
                lineup.details ? lineup.details.map(item => {
                  return (
                    <div className="detail-item">
                      <p className="detail-title">{item.title}</p>
                      {
                        item.link ?
                          <p className="detail-content">
                            <a href={item.link}>{item.content}</a>
                          </p>
                          : <p className="detail-content">{item.content}</p>
                      }
                    </div>
                  )
                }) : null
              }
            </div>
          </div>
          <p className="lineup-link text-right"><a href="/lineup">保有機種一覧へ</a></p>
        </section>
      </div>
    )
  }
}

export default Skybox
