import React, { useState, useEffect } from "react";
import axios from "axios";

export default function EpisodeList() {
  
  const [episode, setEpisode] = useState([{}]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
      .then(res => {
        setEpisode(res.data.results)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div className="ep-sec">
      {episode.map((e) => (
        <div class-name="ep-card">
          <h2 key={e.id}>Episode Name: {e.name}</h2>
          <p key={e.id}>Episode: {e.episode}</p>
          <p key={e.id}>Air Date: {e.air_date}</p>
        </div>
      ))}
    </div>
  )

}