// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card"


export default function Character() {
    const [char, setChar] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://swapi.py4e.com/api/people/1")
        .then(response => {
          console.log(response.data);
        //setChar(response.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, []);
    
    return (
      <div>
        <ul>
          {char.map((ch) => {
            return (
              <Card
            
              name={ch.name}
            height={ch.height}
            //   mass={character.mass}
            //   hairColor={character.hairColor}
            //   skinColor={character.skinColor}
            //   eyeColor={character.eyeColor}
            //   gender={character.gender}
            //   homeworld={character.homeworld}
            //   films={character.films}
            //   species={character.species}
            //   vehicles={character.vehicles}
            //   starships={character.starships}
              />
            );
          })}
        </ul>
      </div>
    );
  }

