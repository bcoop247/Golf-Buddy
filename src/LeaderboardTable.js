import {useEffect, useState} from 'react'

export default function LeaderBoardTable({ rankings }) {

  
   return (
    <table className="table">
      
      <thead>
        <tr>
          <th>Name</th>
          <th>Events</th>
          <th>Points</th>
          <th>World Rank</th>
        </tr>
      </thead>
      <tbody>
        {rankings.splice(0, 15).map((player) => (
          <tr key={player.PlayerID}>
            <td>{player.Name}</td>
            <td>{player.Events}</td>
            <td>{player.TotalPoints}</td>
            <td>{player.WorldGolfRank}</td>
          </tr>
        ))}
      </tbody>
    </table>
    
  )
}