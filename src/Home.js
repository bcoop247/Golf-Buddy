
import { Link } from 'react-router-dom'


export default function Home() {

  return (
    
    <div className="home">

      <Link to="FetchPlayers" className='leaderboardlink'>
      <div className="leaderboard" style={{ cursor: 'pointer' }}></div>
      </Link>
      
      <Link to="Tournaments" className='tournamentslink'>
      <div className="tournament" style={{ cursor: 'pointer' }}></div>
      </Link>
      
    </div>
  )
}