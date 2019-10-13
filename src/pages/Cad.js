import React, { Component } from 'react'

class Cad extends Component {
  render() {
    return (
      <div className="cad">
        <h2 className="title">CADによる施工計画</h2>
        <p>各クレーンのCAD図面を元に、工事現場に合わせた施工計画を提案します。</p>
        <p>重量物等の運搬据付ならびに土木建設現場作業に関わる総合的かつ、現場に合った最適な施工計画を提案します。</p>
        <div className="cad-images">
          <img src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1570048656/nagao-website/cad1.png" alt=""/>
          <img src="https://res.cloudinary.com/yoshitsugunagao/image/upload/v1570048656/nagao-website/cad2.png" alt=""/>
        </div>
      </div>
    )
  }
}

export default Cad