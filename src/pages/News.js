import React, { Component } from 'react'
import news from '../data/news.json'

export class News extends Component {

  render() {
    const item = news.filter(item => item.date === this.props.match.params.newsId)[0]
    return (
      <div className="news main-container">
        <section className="wrap">
          <h2 className="main-header">News</h2>
          <div className="news-container">
            <div className="news-sidebar">
              <h3 className="news-title">新着一覧</h3>
              {
                news.map((item,index) => {
                  return (
                    <div className="news-sidebar-container" key={index}>
                      <p className="news-sidebar-date">{item.date}</p>
                      <p className="news-sidebar-title"><a href={`/news/${item.date}`}>{item.title}</a></p>
                    </div>
                  )
                })
              }
            </div>
            <div className="news-contents">
              <h3 className="news-title">{item.title}</h3>
              <p className="news-content">{item.content}</p>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default News
