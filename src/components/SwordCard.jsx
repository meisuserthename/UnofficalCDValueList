import './SwordCard.css'

function SwordCard({ sword }) {
  const getRarityColor = (rarity) => {
    const colors = {
      'godly': '#ff6b6b',
      'exclusive': '#9c27b0',
      'legendary': '#ffd700',
    }
    return colors[rarity.toLowerCase()] || '#999'
  }

  const getDemandColor = (demand) => {
    const colors = {
      'Great': '#4CAF50',
      'Good': '#FFC107',
      'Normal': '#2196F3',
      'null': '#999',
    }
    return colors[demand] || '#999'
  }

  return (
    <div className="sword-card">
      <div className="card-image">
        {sword.image ? (
          <img src={sword.image} alt={sword.name} />
        ) : (
          <div className="image-placeholder">Image</div>
        )}
      </div>
      <div className="card-content">
        <h3 className="sword-name">{sword.name}</h3>
        <p className="sword-rarity" style={{ color: getRarityColor(sword.rarity) }}>
          {sword.rarity}
        </p>
        <div className="stat-row">
          <span className="stat-label">Value:</span>
          <span className="stat-value">{sword.value}</span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Demand:</span>
          <span className="stat-value" style={{ color: getDemandColor(sword.demand) }}>
            {sword.demand}
          </span>
        </div>
        <div className="stat-row">
          <span className="stat-label">Amount of copies:</span>
          <span className="stat-value">{sword.copies}</span>
        </div>
      </div>
    </div>
  )
}

export default SwordCard
