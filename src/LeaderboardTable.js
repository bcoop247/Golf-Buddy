import React, { useState } from 'react'

export default function LeaderBoardTable({ seasonStats }) {
const itemsPerPage = 15;
const [startIndex, setStartIndex] = useState(0);

const handleForward = () => {
  setStartIndex((prevIndex) => prevIndex + itemsPerPage);
};

const handleBackward = () => {
  setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
};

const visibleItems = seasonStats.slice(startIndex, startIndex + itemsPerPage);

  
   return (
    <>
    <table className="table">
      
      <thead>
        <tr>
          <th>Name</th>
          <th>Events</th>
          <th>Total Points</th>
          <th>Average Points</th>
          <th>World Rank</th>
        </tr>
      </thead>
      <tbody>
        {visibleItems.map((player, index) => (
          <tr key={index}>
            <td>{player.Name}</td>
            <td>{player.Events}</td>
            <td>{player.TotalPoints}</td>
            <td>{player.AveragePoints}</td>
            <td>{player.WorldGolfRank}</td>
          </tr>
        ))}
      </tbody>
    </table>

<div className='buttons'>
    {startIndex > 0 && (
        <button onClick={handleBackward} className='load_previous'>Load Previous</button>
      )}

    {startIndex + itemsPerPage < seasonStats.length && (
        <button onClick={handleForward} className='load_more'>Load More</button>
      )}

</div>

</>
  )
}