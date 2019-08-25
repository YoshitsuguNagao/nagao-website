import React, { Component } from 'react'
import guides from '../data/business-guide.json'
import experience from '../data/experience.json'

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
      <div className="business-guide">

        <section className="guides">
          <h2 className="title">業務内容</h2>
          {
            guides.map((guide,index) => {
              return this.showGuides(guide,index)
            })
          }
        </section>
        <section className="experience">
          <h2 className="title">実績(グループ含む)</h2>
          {
            experience.map((item,index) => {
              return (
                <div className="each-experience" key={index}>
                  <p className="experience-title">{item.title}</p>
                  <p className="experience-content">{item.content}</p>
                </div>
              )
            })
          }
        </section>
      </div>
    )
  }
}

export default BusinessGuide
