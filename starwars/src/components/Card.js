import React from "react";

const Card = props => {
  return (
    <li className="card" key={props.name}>
    <h2>Height: {props.height}</h2>
  </li>
  )
};
export default Card;
