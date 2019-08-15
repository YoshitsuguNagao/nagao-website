import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="nav-title">
          <Link className="nav-title" to="/"><h1>㈱長尾レッカー</h1></Link>
          <div className="nav-tel">
            <p>お気軽にお問い合わせください</p>
            <p>TEL: 0537-86-6410</p>
          </div>
        </div>
        <div className="navbar-menu">
          <ul className="nav-links">
            <li><Link to="/"><p>ホーム</p></Link></li>
            <li><a href="/company">会社概要</a></li>
            <li><a href="/lineup">保有機種</a></li>
            <li><a href="/business-guide">事業内容</a></li>
            <li><a href="/recruit">採用情報</a></li>
            <li><a href="/contact">お問い合わせ</a></li>
          </ul>
          <div className="burger">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
