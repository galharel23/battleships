import React from "react";
import "./style.css";

function User(props) {
  return (
    <div className="User">
        <h4>{props.name}</h4>
        <p>Score: {props.rank}</p>
        <p>id: {props.id}</p>
        <p>{props.isOnline ? "online":"not online"}</p>
    </div>
  );
}

export default User;