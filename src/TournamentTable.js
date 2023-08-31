import { useState } from "react";

const TournamentTable = ({ apiData }) => {
  const itemsPerPage = 15;
  const [startIndex, setStartIndex] = useState(0);
  
  const handleForward = () => {
    setStartIndex((prevIndex) => prevIndex + itemsPerPage);
  };
  
  const handleBackward = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerPage, 0));
  };
  
  const visibleItems = apiData.slice(startIndex, startIndex + itemsPerPage);
  
    
     return (
      <>
      <table className="table">
        
        <thead>
          <tr>
            <th>Tournament</th>
            <th>Location</th>
            <th>Date</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          {visibleItems.map((tourney, index) => (
            <tr key={index}>
              <td>{tourney.Name}</td>
              <td>{tourney.City}, {tourney.Country}</td>
              <td>{tourney.StartDate}</td>
              <td>{tourney.Venue}</td>
            </tr>
          ))}
        </tbody>
      </table>
  
  <div className='buttons'>
      {startIndex > 0 && (
          <button onClick={handleBackward} className='load_previous'>Load Previous</button>
        )}
  
      {startIndex + itemsPerPage < apiData.length && (
          <button onClick={handleForward} className='tourney_buttons'>Load More</button>
        )}
  
  </div>
  
  </>
    )

}
export default TournamentTable