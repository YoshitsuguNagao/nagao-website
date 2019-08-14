import React, { Component } from 'react'
import lineups from '../data/lineup.json'
class Lineup extends Component {
  state = {
    lineups: lineups
  }

lineupCard = (lineup, index) => {
  return (
    <div className="lineup-card" key={index}>
      <p className="lineup-model">{lineup.model}</p>
      <p className="lineup-maker">{lineup.maker}</p>
      <p className="lineup-capacity">{lineup.capacity} ton</p>
      <p className="lineup-info">{lineup.info}</p>
    </div>
  )
}

  render() {
    const { lineups } = this.state;
    return (
      <div className="lineup">
        <h2 className="lineup-title">保有機種一覧</h2>
        <h3 className="lineup-subtitle">オールテレーンクレーン</h3>
        <div className="lineup-card">
          <p className="lineup-model">機種</p>
          <p className="lineup-maker">メーカー</p>
          <p className="lineup-capacity">吊上げ能力</p>
          <p className="lineup-info">その他</p>
        </div>
        {
          lineups.map((lineup, index) => {
            return lineup.type === "AC" ? this.lineupCard(lineup, index) : null
            })
        }
        <h3 className="lineup-subtitle">ラフテレーンクレーン</h3>
        {
          lineups.map((lineup, index) => {
            return lineup.type === "RC" ? this.lineupCard(lineup, index) : null
            })
        }
        <h3 className="lineup-subtitle">トレーラー/トラック</h3>
        {
          lineups.map((lineup, index) => {
            return lineup.type === "Truck" ? this.lineupCard(lineup, index) : null
            })
        }
        <h3 className="lineup-subtitle">その他</h3>
        {
          lineups.map((lineup, index) => {
            return lineup.type === "ETC" ? this.lineupCard(lineup, index) : null
            })
        }
      </div>
    )
  }
}

export default Lineup
