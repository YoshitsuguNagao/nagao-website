import React, { Component } from "react";

export class Map extends Component {
  render() {
    const { name, address, tel, fax, url } = this.props.item;
    console.log(name);
    return (
      <>
        <div className="contact-info wrap">
          <h3 className="contact-name">{name}</h3>
          <h4 className="contact-content">{address}</h4>
          <h4 className="contact-content">TEL: {tel}</h4>
          <h4 className="contact-content">FAX: {fax}</h4>
        </div>
        <iframe src={url} frameborder="0" allowfullscreen></iframe>
      </>
    );
  }
}

export default Map;
