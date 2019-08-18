import React, { Component } from 'react'
import recruits from '../data/recruits.json'

class Recruit extends Component {


  showRecruit = (recruit,index) => {
    return (
      <div className="recruit-card">
        {
          Object.keys(recruit).map((keyName,i) => {
            return (
              <div className="recruit-item">
                <p className="recruit-title">{recruit[keyName][0]}</p>
                <p className="recruit-content">{recruit[keyName][1]}</p>
              </div>
            )
          })
        }
      </div>
    )
  }

  render() {
    return (
      <div className="recruits">
        <h2 className="title">採用情報</h2>
        {
          recruits.map((recruit,index) => {
            return this.showRecruit(recruit,index)
          })
        }
      </div>
    )
  }
}

export default Recruit
