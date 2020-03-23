import React, { Component } from 'react'
import lineups from '../data/lineup.json'


class Lineup extends Component {
  state = {
    lineups: lineups
  }

  lineupCard = (lineup, index) => {
    return (
      <div className="lineup-card">
        <li className="table-row" key={index}>
          <p className="col lineup-model" data-label="機種">
            <a href={`/lineup/${lineup.model}`}>
              {/* {lineup.images.length ? "★ " : "☆ "}{lineup.model} */}
              {lineup.model}
            </a>
          </p>
          <p className="col lineup-maker" data-label="メーカー">{lineup.maker}</p>
          <p className="col lineup-capacity" data-label="吊上げ能力">{lineup.capacity}</p>
          <p className="col lineup-unit" data-label="保有台数">{lineup.unit} 台</p>
        </li>
      </div>
    )
  }

  render() {
    const { lineups } = this.state;
    return (
      <div className="lineup">
        <h2 className="title">保有機種一覧</h2>
        <h3 className="lineup-subtitle">オールテレーンクレーン</h3>
        <ul className="responsive-table">
          <li className="table-header">
            <p className="col lineup-model">機種</p>
            <p className="col lineup-maker">メーカー</p>
            <p className="col lineup-capacity">吊上げ能力</p>
            <p className="col lineup-unit">保有台数</p>
          </li>
          {
            lineups.map((lineup, index) => {
              return lineup.type === "AC" ? this.lineupCard(lineup, index) : null
            })
          }
        </ul>
        <h3 className="lineup-subtitle">ラフテレーンクレーン</h3>
        <ul className="responsive-table">
          <li className="table-header">
            <p className="col lineup-model">機種</p>
            <p className="col lineup-maker">メーカー</p>
            <p className="col lineup-capacity">吊上げ能力</p>
            <p className="col lineup-unit">保有台数</p>
          </li>
          {
            lineups.map((lineup, index) => {
              return lineup.type === "RC" ? this.lineupCard(lineup, index) : null
            })
          }
        </ul>
        <h3 className="lineup-subtitle">クローラークレーン (new)</h3>
        <ul className="responsive-table">
          <li className="table-header">
            <p className="col lineup-model">機種</p>
            <p className="col lineup-maker">メーカー</p>
            <p className="col lineup-capacity">吊上げ能力</p>
            <p className="col lineup-unit">保有台数</p>
          </li>
          {
            lineups.map((lineup, index) => {
              return lineup.type === "CC" ? this.lineupCard(lineup, index) : null
            })
          }
        </ul>
        <h3 className="lineup-subtitle">トレーラー</h3>
        <ul className="responsive-table">
          <li className="table-header">
            <p className="col lineup-model">機種</p>
            <p className="col lineup-maker">メーカー</p>
            <p className="col lineup-capacity">積載重量</p>
            <p className="col lineup-unit">保有台数</p>
          </li>
          {
            lineups.map((lineup, index) => {
              return lineup.type === "TRL" ? this.lineupCard(lineup, index) : null
            })
          }
        </ul>
        <h3 className="lineup-subtitle">スカイボックス</h3>
        <ul className="responsive-table">
          <li className="table-header">
            <p className="col lineup-model">機種</p>
            <p className="col lineup-maker">メーカー</p>
            <p className="col lineup-capacity">積載能力</p>
            <p className="col lineup-unit">保有台数</p>
          </li>
          {
            lineups.map((lineup, index) => {
              return lineup.type === "ETC" ? this.lineupCard(lineup, index) : null
            })
          }
        </ul>
      </div>
    )
  }
}

export default Lineup
