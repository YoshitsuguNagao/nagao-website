import React, { Component } from 'react'
import lineups from '../data/lineup.json'

class Skybox extends Component {
  render() {
    const lineup = lineups.filter(lineup => lineup.model === "SS-150")[0]
    return (
      <div className="skybox main-container">
        <section className="wrap">
          <h2 className="main-header">Skybox</h2>
          <p>
            SKyboxとは、移動式クレーンに先端に装着する作業デッキで、従来の高所作業車では出来ない範囲をカバーする事ができます。
            弊社の所有しているATF220G-5に装着する事で高さ86mの作業が可能になります。
            通常の高所作業車では届かない作業（風力発電の点検等）にとても便利です。
          </p>
        </section>
        <section className="wrap">
          <h3 className="main-header">取り付け可能機種</h3>
          <p>ATF220G-5, ATF100G-4, GR-700N, GR-600N, GR-250N</p>
          <div className="detail-contents">
            <h3 className="detail-model title">{lineup.model}仕様</h3>
            {
              lineup.details.map(item => {
                return (
                  <div className="detail-item">
                    <p className="detail-title">{item.title}</p>
                    <p className="detail-content">{item.content}</p>
                  </div>
                )
              })
            }
          </div>
        </section>
      </div>
    )
  }
}

export default Skybox
