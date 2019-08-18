import React, { Component } from 'react'

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h2 className="title">お問い合わせ／アクセス</h2>
        <div className="contact-info">
          <h3>株式会社　長尾レッカー</h3>
          <h3>〒437-1604 静岡県御前崎市佐倉1041-1</h3>
          <h3>TEL: 0537-86-6410</h3>
          <h3>FAX: 0537-86-3556</h3>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10079.048334492865!2d138.14452086082804!3d34.63292143319265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601a60c5f3d7da49%3A0xfa8331789715c191!2z77yI5qCq77yJ6ZW35bC-44Os44OD44Kr44O8!5e0!3m2!1sen!2ses!4v1566155177452!5m2!1sen!2ses" height="450" frameborder="0"  allowfullscreen></iframe>
      </div>
    )
  }
}

export default Contact
