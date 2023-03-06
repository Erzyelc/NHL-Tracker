import React from 'react'
import './TopPlayers.css'
import { CgProfile } from 'react-icons/cg'
import {Link} from 'react-router-dom'
import axios from 'axios'

/*
var config = {
    method: 'get',
    url: 'https://v1.hockey.api-sports.io/{endpoint}',
    headers: {
      'x-rapidapi-key': 'e88d3a8f058d4c009abcd98a10274f1a',
      'x-rapidapi-host': 'v1.hockey.api-sports.io'
    }
  };
  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
  })
  .catch(function (error) {
    console.log(error);
  });
*/
function TopPlayers() {
  return (
    <div className="top-players-container">
        <h2>Current Players</h2>
        <div className="player-icon-container">
            <CgProfile className="player-icon"/>
            <CgProfile className="player-icon"/>
            <CgProfile className="player-icon"/>
            <CgProfile className="player-icon"/>
            <CgProfile className="player-icon"/>
        </div>
        <Link to={`/`}className="view-all">View All</Link>
    </div>
  )
}

export default TopPlayers