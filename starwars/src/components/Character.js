// Write your Character component here
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

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

  if (char) {
    console.log("data");
  } else {
    return <div>Loading</div>;
  }

  return (
    <div>
      {char.map((ch) => {
        return (
          <>
            <div>
              <Card>
                <CardBody>
                  <CardTitle>
                    <h1>Name: {ch.name}</h1>
                  </CardTitle>
                  <CardSubtitle>
                    <h3>Gender: {ch.gender}</h3>
                  </CardSubtitle>
                  <CardSubtitle>
                    <h3>Height: {ch.height}cm</h3>
                  </CardSubtitle>
                  <CardSubtitle>
                    <h3>Mass: {ch.mass}kg</h3>
                  </CardSubtitle>
                  <CardText>
                    <p>
                      {ch.name} played in {ch.films.length} films.
                    </p>
                  </CardText>
                </CardBody>
              </Card>
            </div>
          </>
        );
      })}
    </div>
  );
};

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
