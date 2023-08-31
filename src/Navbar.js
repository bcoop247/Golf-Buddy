import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import PlayerInfo from './PlayerInfo'


export default function Navbar() {
  const [userInput, setUserInput] = useState('');
  const [searchQuery, setSetSearchQuery] = useState('');
  const [renderNewComponent, setRenderNewComponent] = useState(false);
  const [apiData, setApiData] = useState([]);
  
  const handleChange = (event) => {setUserInput(event.target.value);};

  const handleSubmit = (event) => { event.preventDefault();
    setSetSearchQuery(userInput);
    setRenderNewComponent(true);
    
};

  useEffect(() => { fetch(`https://api.sportsdata.io/golf/v2/json/Players?key=7a3ef3ea981c4b2abe5dbe75f32d13b5`)
    .then(res => res.json())
    .then(data => {
      setApiData(data);
    })
    
  },[searchQuery]);


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
    {renderNewComponent && <PlayerInfo userInput={searchQuery} apiData={apiData} />}
  </div>
  
)
}