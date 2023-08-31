import React, {useState} from "react";
import { useEffect } from "react";
import TournamentTable from './TournamentTable'

const Tournaments = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => { fetch(`https://api.sportsdata.io/golf/v2/json/Tournaments?key=7a3ef3ea981c4b2abe5dbe75f32d13b5`)
    .then(res => res.json())
    .then(data => {
      setApiData(data);
    })
    
  },[]);
console.log(apiData);
  return(
  <div>
  <TournamentTable apiData={apiData} />
  </div>
  )

}
export default Tournaments;