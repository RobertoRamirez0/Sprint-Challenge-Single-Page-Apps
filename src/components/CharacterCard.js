import React from "react";

export default function CharacterCard(props) {
  
  return (
    <div className="char-card">
      <img src={props.img} alt='potrait of character'/>
      <h2>Name: {props.name}</h2>
      <p>Status: {props.status}</p>
      <p>Species: {props.species}</p>
      {/* <p key={e.origin.name}>Origin: {e.origin.name}</p>
      <p key={e.location.name}>Location: {e.location.name}</p> */}
    </div>
  )
}
