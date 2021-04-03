import React, { Component } from "react";

export class Map extends Component {
  render() {
    const { name, address, tel, fax, url } = this.props.item;
    return (
      <>
        <div className="pt-4 wrap">
          <h3 className="pb-2">{name}</h3>
          <p className="pb-2">{address}</p>
          <p className="pb-2">TEL: {tel}</p>
          <p className="pb-2">FAX: {fax}</p>
        </div>
        <iframe src={url} frameborder="0" allowfullscreen></iframe>
      </>
    );
  }
}

export default Map;
