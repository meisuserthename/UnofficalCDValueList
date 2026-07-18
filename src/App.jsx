import { useState } from 'react'
import SwordCard from './components/SwordCard'
import { swords } from './data/swords'
import './App.css'

function App() {
  const [selectedRarity, setSelectedRarity] = useState('all')

  const rarities = ['all', 'godly', 'exclusive', 'legendary']

  const filteredSwords = selectedRarity === 'all'
    ? swords
    : swords.filter(sword => sword.rarity.toLowerCase() === selectedRarity)

  return (
    <div className="app">
      <header className="header">
        <h1>Custom Duels Sword Values (Most Recent)</h1>
        <p className="subtitle">(CHECK THE INFO TAB)</p>
      </header>

      <div className="filter-buttons">
        {rarities.map(rarity => (
          <button
            key={rarity}
            className={`filter-btn ${selectedRarity === rarity ? 'active' : ''}`}
            onClick={() => setSelectedRarity(rarity)}
          >
            {rarity.charAt(0).toUpperCase() + rarity.slice(1)}
          </button>
        ))}
      </div>

      <div className="cards-container">
        {filteredSwords.map(sword => (
          <SwordCard key={sword.id} sword={sword} />
        ))}
      </div>
    </div>
  )
}

export default App
