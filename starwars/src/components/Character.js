// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";

const Character = () => {
  const [char, setChar] = useState();

  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/api/people/")
      .then((response) => {
        setChar(response.data.results);
        console.log(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if(char) {
    console.log("data")
 } else {
    return <div>Loading</div>
 }

  return (
    <div>
  {char.map(ch => {
        return (
          <>
          <div>
          <h1>Name: {ch.name}</h1>
          <h1>Height: {ch.height}cm</h1>
          <h1>Mass: {ch.mass}kg</h1>
          <h1>Gender: {ch.gender}</h1>
          <h1>Films: {ch.films.length}</h1>
          </div>
          </>
        )
      })}
    </div>
  );
}



export default Character;

//   hairColor={character.hairColor}
//   skinColor={character.skinColor}
//   eyeColor={character.eyeColor}
//   gender={character.gender}
//   homeworld={character.homeworld}
//   films={character.films}
//   species={character.species}
//   vehicles={character.vehicles}
//   starships={character.starships}
