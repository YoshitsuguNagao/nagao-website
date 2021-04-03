import React, { Component } from 'react'
import { Link } from "react-router-dom";
import lineups from '../static/data/lineup.json'


class Lineup extends Component {
  state = {
    lineups: lineups
  }

  cardTitle = () => {
    return (
      <li className="table-header">
        <p className="col">機種</p>
        <p className="col">メーカー</p>
        <p className="col">吊上げ能力</p>
        <p className="col">保有台数</p>
      </li>
    )
  }

  cardTitle2 = () => {
    return (
      <li className="table-header">
        <p className="col">機種</p>
        <p className="col">メーカー</p>
        <p className="col">積載重量</p>
        <p className="col">保有台数</p>
      </li>
    )
  }

  lineupCard = (lineup, index) => {
    return (
      <React.Fragment key={`${lineup.model}${index}`}>
        <div className="lineup-card">
          <li className="table-row" key={lineup.model}>
            <p className="col" data-label="機種">
              <Link to={`/lineup/${lineup.model}`}>
                {/* {lineup.images.length ? "★ " : "☆ "}{lineup.model} */}
                {lineup.model}
              </Link>
            </p>
            <p className="col" data-label="メーカー">{lineup.maker}</p>
            {
              ["AC", "RC", "CC"].includes(lineup.type, 0) ?
              <p className="col" data-label="吊上げ能力">{lineup.capacity}</p> :
              <p className="col" data-label="積載能力">{lineup.capacity}</p>
            }
            <p className="col" data-label="保有台数">{lineup.unit} 台</p>
          </li>
        </div>
      </React.Fragment>
    )
  }

  render() {
    const { lineups } = this.state;
    return (
      <div className="lineup main-container">
        <section className="wrap">
          <h2 className="main-header">保有機種一覧</h2>
          <h3 className="lineup-subtitle">オールテレーンクレーン</h3>
          <ul className="responsive-table">
            {this.cardTitle()}
            {
              lineups.map((lineup, index) => {
                return lineup.type === "AC" ? this.lineupCard(lineup, index) : null
              })
            }
          </ul>
          <h3 className="lineup-subtitle">ラフテレーンクレーン</h3>
          <ul className="responsive-table">
            {this.cardTitle()}
            {
              lineups.map((lineup, index) => {
                return lineup.type === "RC" ? this.lineupCard(lineup, index) : null
              })
            }
          </ul>
          <h3 className="lineup-subtitle">クローラークレーン (new)</h3>
          <ul className="responsive-table">
            {this.cardTitle()}
            {
              lineups.map((lineup, index) => {
                return lineup.type === "CC" ? this.lineupCard(lineup, index) : null
              })
            }
          </ul>
          <h3 className="lineup-subtitle">トレーラー</h3>
          <ul className="responsive-table">
            {this.cardTitle2()}
            {
              lineups.map((lineup, index) => {
                return lineup.type === "TRL" ? this.lineupCard(lineup, index) : null
              })
            }
          </ul>
          <h3 className="lineup-subtitle">トラック</h3>
          <ul className="responsive-table">
            {this.cardTitle2()}
            {
              lineups.map((lineup, index) => {
                return lineup.type === "TRK" ? this.lineupCard(lineup, index) : null
              })
            }
          </ul>
          <h3 className="lineup-subtitle">高所作業車</h3>
          <ul className="responsive-table">
            {this.cardTitle2()}
            {
              lineups.map((lineup, index) => {
                return lineup.type === "AT" ? this.lineupCard(lineup, index) : null
              })
            }
          </ul>
          <h3 className="lineup-subtitle">スカイボックス</h3>
          <ul className="responsive-table">
            {this.cardTitle2()}
            {
              lineups.map((lineup, index) => {
                return lineup.type === "SKYBOX" ? this.lineupCard(lineup, index) : null
              })
            }
          </ul>
        </section>
      </div>
    )
  }
}

export default Lineup
