/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import Map from "../components/template/Map";
import maps from "../static/data/maps.json";

class Contact extends Component {
  render() {
    return (
      <div className="contact main-container">
        <h2 className="main-header wrap">お問い合わせ／アクセス</h2>
        {maps.map(item => {
          return <Map item={item} />;
        })}
      </div>
    );
  }
}

export default Contact;
