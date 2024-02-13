import React, { useState, useEffect } from 'react'
import './Profile.css'
import { getGameStats } from '../../utils/gameFuncs';

function Profile() {
    const [matchesPlayed, setMatchesPlayed] = useState(0);
    const [matchesWon, setMatchesWon] = useState(0);
    const [winRatio, setWinRatio] = useState(0);
    const name = sessionStorage.getItem('name')
  
    useEffect(() => {
        getGameStats(name).then((res=>{
            if(res.gamesPlayed!==0){
                console.log(res.gamesPlayed, res.gamesWon)
                setMatchesPlayed(res.gamesPlayed)
                setMatchesWon(res.gamesWon)
                setWinRatio((res.gamesWon/res.gamesPlayed).toFixed(2))
            }
        }))
    }, [name]);

    return (
        <div className="profile-page">
        <h1>Bingo Profile</h1>
        <div className="profile-info">
          <div className="info-item">
            <label>Username:</label>
            <span>{name}</span>
          </div>
          <div className="info-item">
            <label>Matches Played:</label>
            <span>{matchesPlayed}</span>
          </div>
          <div className="info-item">
            <label>Matches Won:</label>
            <span>{matchesWon}</span>
          </div>
          <div className="info-item">
            <label>Win Ratio:</label>
            <span>{winRatio}</span>
          </div>
        </div>
      </div>
    );
}

export default Profile