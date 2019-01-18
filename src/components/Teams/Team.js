import React from "react";
import "./Team.css";


const Teams = props => (
    <div className="card" onClick={() => props.Counter(props.id)}>
    <div className="img-container">
    <center><strong>{props.name}</strong></center> 
    <img alt={props.name} src={props.image} width="220px"  height="180px"/>
    </div>
    </div>
    );

    export default Teams;