import React, { useState, useEffect } from "react"


export default function PlayerInfo(props) {
  const searchQuery = props.userInput;
  const apiData = props.apiData;
  const [searchResults, setSearchResults] = useState([]);

  const results = apiData.filter((item) => item.FirstName.toLowerCase().includes(searchQuery.toLowerCase()));

  useEffect(() => {
    setSearchResults(results);
    console.log(searchResults);
  }, [apiData])
  
  
  return(
    <div className="search_results">
      
      <h1>YOU SEARCHED FOR: {searchQuery} </h1>
      
      <h1>The search results are: </h1>
        <ul>
          {searchResults.map((item) => (<li>Name: {item.FirstName} {item.LastName} Country: {item.Country ? item.Country : "unknown"} College: {item.College ? item.College : "unknown"} Weight: {item.Weight ? item.Weight : "Unknown"} <img className="player_photo" src={item.PhotoUrl} alt="Player Photo" /> </li>))}
        </ul>
    </div>
  )
      }