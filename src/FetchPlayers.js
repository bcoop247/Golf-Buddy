import {useEffect, useState} from 'react'
import LeaderBoardTable from './LeaderboardTable.js';

export default function FetchPlayers() {
  const years = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015];
  const [season, setSeason] = useState(2022);
  const [rankings , setRankings] = useState([]);

  const handleChange = (e) => {
    setSeason(e.target.value);
  };
  
 useEffect(() => {
      fetch(`https://api.sportsdata.io/golf/v2/json/PlayerSeasonStats/${season}?key=7a3ef3ea981c4b2abe5dbe75f32d13b5`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setRankings(data);
        
      })
    }, [season]);


  return (
    <div className='season_stats'>
      
      <select value={season} onChange={handleChange} id="season">
      <p>Select Season:</p>
        <option value="Select Season">Select Season</option>
        {years.map((year) => <option value={year} key={year}> {year} </option>)}
      </select>
      <LeaderBoardTable rankings={rankings} />
      
      
      
    </div>
  )
}