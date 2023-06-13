
import FetchPlayers from "./FetchPlayers"
import { Link } from 'react-router-dom'

export default function Home() {

  const handleClick = (event) => {
    alert('testing');
  }

  return (
    <div className="home">
      <div className="leaderboard" onClick={handleClick} style={{ cursor: 'pointer' }}>
      
      </div>

      <div className="tournament">

      </div>
      
      
    </div>
  )
}