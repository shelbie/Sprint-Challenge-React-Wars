// Write your Character component here
import React from "react";


function CharacterComponent(props) {

  

  return (
    <>
    <div>
      <h1>{props.name}</h1>
      <p>{props.height}</p>
      <p>{props.mass}</p>
      <p>{props.hairColor}</p>
      <p>{props.skinColor}</p>
      <p>{props.eyeColor}</p>
      <p>{props.gender}</p>
      <p>{props.homeworld}</p>
      <p>{props.films}</p>
      <p>{props.species}</p>
      <p>{props.vehicles}</p>
      <p>{props.starships}</p>
      </div>
    </>
  );
}

export default CharacterComponent;
