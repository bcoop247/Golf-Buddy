import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import PlayerInfo from './PlayerInfo'


export default function Navbar() {
  const [search, setSearch] = useState('');
  const [userInput, setUserInput] = useState('');
  const [players, setPlayers] = useState({});
  const [showNewComponent, setShowNewComponent] = useState(false);
  const [isMatch, setIsMatch] = useState(false);

  const handleChange = (event) => {setUserInput(event.target.value);};

  const handleSubmit = (event) => { event.preventDefault();
    setSearch(userInput);
    setShowNewComponent(true);
    console.log('Search term:', userInput);
    
  
};

  useEffect(() => {
    if(search){
    fetch(`https://api.sportsdata.io/golf/v2/json/Players?key=7a3ef3ea981c4b2abe5dbe75f32d13b5`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      setPlayers(data);
      setIsMatch(search === data.FirstName);
    })
    }
    
  },[search]);
  

return(
  <div>
    <nav>
      <ul className="navbar">
        <li><Link to="/" className='nav-link'> Home </Link></li>
        <li><Link to="/FetchPlayers" className='nav-link'> Leaderboards </Link></li>
        <li><Link to="/Tournaments" className='nav-link'> Tournaments </Link></li>
        
        <li>
          <form onSubmit={handleSubmit}>
          <input type="text" id="search" placeholder='Search Player' onChange={handleChange} value={userInput}></input>
          
          </form>
          
        </li>
      </ul>
    </nav>
    {showNewComponent && <PlayerInfo info={players} />}
  </div>
  
)
}