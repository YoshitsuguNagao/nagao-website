/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import Map from "../components/Map";
import maps from "../data/maps.json";

class Contact extends Component {
  render() {
    console.log(maps);
    return (
      <div className="contact">
        <h2 className="contact-title">お問い合わせ／アクセス</h2>
        {maps.map(item => {
          return <Map item={item} />;
        })}
      </div>
    );
  }
}

export default Contact;
