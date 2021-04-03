import React, { Component } from 'react'
import guides from '../static/data/business-guide.json'
import experience from '../static/data/experience.json'
import PhotoGallery from './PhotoGallery'

class BusinessGuide extends Component {

  showGuides = (guide,index) => {
    return (
      <div className="guide-card" key={index}>
        <h3 className="guide-name">{guide.name}</h3>
        <ul className="guide-contents">
          {
            guide.contents.map((content,i) => {
              return <li className="guide-content" key={i}>{content}</li>
            })
          }
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="business-guide main-container">

        <section className="guides wrap">
          <h2 className="main-header">業務内容</h2>
          {
            guides.map((guide,index) => {
              return this.showGuides(guide,index)
            })
          }
        </section>
        <section className="experience wrap">
          <h2 className="main-header">実績(グループ含む)</h2>
          <p className="text-right mb10">(五十音順・敬称略)</p>
          {
            experience.map((item,index) => {
              return (
                <div className="experience-card" key={index}>
                  <p className="experience-title">{item.title}</p>
                  {/* <p className="experience-content">{item.content}</p> */}
                </div>
              )
            })
          }
        </section>
        <section className="wrap">
          <h2 className="main-header">ギャラリー</h2>
          <PhotoGallery/>
        </section>
      </div>
    )
  }
}

export default BusinessGuide
