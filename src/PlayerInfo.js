import React from "react"

export default function PlayerInfo({ info }) {




  return(
    <div>
      {info.splice(0, 15).map((player) => (
          <p key={player.PlayerID}> {player.FirstName}</p>
            
            
          
        ))}
</div>
  )
      }