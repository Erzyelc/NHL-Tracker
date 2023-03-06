import React from 'react'
import TodaysGames from '../../Components/TodaysGames/TodaysGames'
import TopPlayers from '../../Components/TopPlayers/TopPlayers'
import './Homepage.css'

function Homepage() {
  return (
    <div className="homepage-container">
        <TopPlayers />
        <TodaysGames /> 
    </div>
  )
}

export default Homepage