import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h2 className="contact-title">お問い合わせ／アクセス</h2>
        <div className="contact-info">
          <h3 className="contact-name">御前崎本社</h3>
          <h4 className="contact-content">〒437-1604 静岡県御前崎市佐倉1041-1</h4>
          <h4 className="contact-content">TEL: 0537-86-6410</h4>
          <h4 className="contact-content">FAX: 0537-86-3556</h4>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10079.048334492865!2d138.14452086082804!3d34.63292143319265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a60c5f3d7da49%3A0xfa8331789715c191!2z77yI5qCq77yJ6ZW35bC-44Os44OD44Kr44O8!5e0!3m2!1sen!2ses!4v1566155177452!5m2!1sen!2ses" frameborder="0"  allowfullscreen></iframe>
        <div className="contact-info">
          <h3 className="contact-name">静岡営業所</h3>
          <h4 className="contact-content">〒422-8034 静岡県静岡市駿河区高松１丁目179番地</h4>
          <h4 className="contact-content">TEL: 054-236-6410</h4>
          <h4 className="contact-content">FAX: 054-236-6411</h4>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20022.12472445547!2d138.4118058955139!3d34.95028446060851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbf010ec4332c6690!2z77yI5qCq77yJ6ZW35bC-44Os44OD44Kr44O8IOmdmeWyoeaUr-W6lw!5e0!3m2!1sen!2ses!4v1566244913960!5m2!1sen!2ses" frameborder="0" allowfullscreen></iframe>
      </div>
    )
  }
}

export default Contact
