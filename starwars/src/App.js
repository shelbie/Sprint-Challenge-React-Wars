import React, {useState, useEffect} from 'react';
import axios from "axios";
import CharacterComponent from "./components/Character"
import './App.css';



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starwars, setStarwars] = useState({});
  useEffect(() => {
    axios
      .get("https://swapi.py4e.com/people/1")
      .then(response => {
        console.log(response);
        setStarwars(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  
        return (
            <CharacterComponent />
        )      
    }

export default App;
