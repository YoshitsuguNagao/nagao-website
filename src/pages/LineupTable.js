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
    <Tr className="lineup-card" key={index}>
      <Td className="lineup-model"><p>{lineup.model}</p></Td>
      <Td className="lineup-maker"><p>{lineup.maker}</p></Td>
      <Td className="lineup-capacity"><p>{lineup.capacity} ton</p></Td>
      <Td className="lineup-info"><p>{lineup.info}</p></Td>
    </Tr>
  )
}

  render() {
    const { lineups } = this.state;
    return (
      <div className="lineup">
        <h2 className="lineup-title">保有機種一覧</h2>
        <h3 className="lineup-subtitle">オールテレーンクレーン</h3>
        <Table className="lineup-table">
          <Thead>
            <Tr className="lineup-card">
              <Th className="lineup-model"><p>機種</p></Th>
              <Th className="lineup-maker"><p>メーカー</p></Th>
              <Th className="lineup-capacity"><p>吊上げ能力</p></Th>
              <Th className="lineup-info"><p>その他</p></Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              lineups.map((lineup, index) => {
                return lineup.type === "AC" ? this.lineupCard(lineup, index) : null
              })
            }
          </Tbody>
        </Table>
        <h3 className="lineup-subtitle">ラフテレーンクレーン</h3>
        <Table>
          <Thead>
            <Tr className="lineup-card">
              <Th className="lineup-model"><p>機種</p></Th>
              <Th className="lineup-maker"><p>メーカー</p></Th>
              <Th className="lineup-capacity"><p>吊上げ能力</p></Th>
              <Th className="lineup-info"><p>その他</p></Th>
            </Tr>
          </Thead>
          <Tbody>
            {
            lineups.map((lineup, index) => {
              return lineup.type === "RC" ? this.lineupCard(lineup, index) : null
              })
            }
          </Tbody>
        </Table>

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
