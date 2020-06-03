import React from "react"
import OfferIcons from "../constants/offer-icons"

const Offer = () => {
  return (
    <section className="offer-section">
      <h3 className="section-title">Notre offre</h3>
      <div className="offer-block">
        {OfferIcons.map(item => {
          return (
            <div className="offer-detail" key={item.key}>
              <span>{item.icon}</span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Offer
