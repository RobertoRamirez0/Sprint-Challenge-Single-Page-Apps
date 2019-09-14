import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function LocationsList() {
  
  const [location, setLocation] = useState([{}]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/location/')
      .then(res => {
        setLocation(res.data.results)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div className="loc-sec">
      {location.map((e) => (
        <div className="loc-card">
        <h2 key={e.id}>Location Name: {e.name}</h2>
        <p key={e.id}>Type: {e.type}</p>
        <p key={e.id}>Dimension: {e.dimension}</p>
        </div>
      ))}
    </div>
  )
}
