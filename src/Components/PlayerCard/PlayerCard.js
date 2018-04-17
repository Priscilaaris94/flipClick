import React from "react";
import "./PlayerCard.css";

const PlayerCard = props => (

    <div className="img-container img-fluid mt-5">

        <img alt={props.name} src={props.image} data-id={props.id} onClick={() => props.updatePlayerClickedValue(props.id)}/>  

    </div>

);

export default PlayerCard;