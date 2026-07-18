import React from 'react'
import '../styles/SwordCard.css'

function SwordCard({ sword }) {
  return (
    <div className="sword-card">
      <div className="sword-image">
        <img src={sword.image} alt={sword.name} />
      </div>
      <div className="sword-info">
        <h3 className="sword-name">{sword.name}</h3>
        <p className={`sword-rarity ${sword.rarity.toLowerCase()}`}>
          {sword.rarity}
        </p>
        <div className="sword-value">
          <span>Value: </span>
          <span className="value-number">{sword.value}</span>
        </div>
        <div className="sword-demand">
          <span>Demand: </span>
          <span className={`demand-level ${sword.demand.toLowerCase()}`}>
            {sword.demand}
          </span>
        </div>
        <div className="sword-copies">
          Amount of copies: {sword.copies}
        </div>
      </div>
    </div>
  )
}

export default SwordCard
