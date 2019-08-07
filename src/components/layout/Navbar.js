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
            <p>TEL:</p>
          </div>
        </div>
        <div className="navbar-menu">
          <ul class="nav-links">
            
            <li><Link to="/home"><p>ホーム</p></Link></li>
            <li><a href="/company">会社概要</a></li>
            <li><a href="/lineup">保有機種</a></li>
            <li><a href="/business-guide">事業内容</a></li>
            <li><a href="/experience">実績</a></li>
            <li><a href="/contact">お問い合わせ</a></li>
          </ul>
          <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
