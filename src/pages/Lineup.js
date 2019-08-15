import React, { Component } from 'react'
import lineups from '../data/lineup.json'
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table"
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css"

class Lineup extends Component {
  state = {
    lineups: lineups
  }

lineupCard = (lineup, index) => {
  return (
    <li className="table-row" key={index}>
      <p className="col lineup-model" data-label="機種">{lineup.model}</p>
      <p className="col lineup-maker" data-label="メーカー">{lineup.maker}</p>
      <p className="col lineup-capacity" data-label="吊上げ能力">{lineup.capacity} ton</p>
      <p className="col lineup-info" data-label="その他">{lineup.info}</p>
    </li>
  )
}

  render() {
    const { lineups } = this.state;
    return (
      <div className="lineup">
        <h2 className="lineup-title">保有機種一覧</h2>
        <h3 className="lineup-subtitle">オールテレーンクレーン</h3>
          <ul className="responsive-table">
            <li className="table-header">
              <p className="col lineup-model">機種</p>
              <p className="col lineup-maker">メーカー</p>
              <p className="col lineup-capacity">吊上げ能力</p>
              <p className="col lineup-info">その他</p>
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
            <p className="col lineup-info">その他</p>
          </li>
          {
            lineups.map((lineup, index) => {
              return lineup.type === "RC" ? this.lineupCard(lineup, index) : null
              })
          }
        </ul>
        <h3 className="lineup-subtitle">トレーラー/トラック</h3>
        <ul className="responsive-table">
          <li className="table-header">
            <p className="col lineup-model">機種</p>
            <p className="col lineup-maker">メーカー</p>
            <p className="col lineup-capacity">吊上げ能力</p>
            <p className="col lineup-info">その他</p>
          </li>
          {
            lineups.map((lineup, index) => {
              return lineup.type === "Truck" ? this.lineupCard(lineup, index) : null
            })
          }
        </ul>
        <h3 className="lineup-subtitle">その他</h3>
        <ul className="responsive-table">
          <li className="table-header">
            <p className="col lineup-model">機種</p>
            <p className="col lineup-maker">メーカー</p>
            <p className="col lineup-capacity">吊上げ能力</p>
            <p className="col lineup-info">その他</p>
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
