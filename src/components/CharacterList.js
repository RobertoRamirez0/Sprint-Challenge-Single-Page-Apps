import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";

export default function CharacterList() {

  const [char, setChar] = useState([{}]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setChar(res.data.results)
        
      })
      .catch(err => {
        console.error(err)
      })
  }, [char]);

  return (
    <section className="character-list grid-view">
      {char.map((e, index) => {
        return <CharacterCard name={e.name} key={index} img={e.image} 
        status={e.status} species={e.species} />
        })}
    </section>
  );
}
