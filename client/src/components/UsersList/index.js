import React from "react";
import "./style.css";

import User from "../UsersList/User/index";

function UsersList() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((users) => setUsers(users));
  },[]);

  console.log(users)
  const usersList = users.map((user) => (
    <User
      key={user._id}
      id={user._id}
      name={user.name}
      rank={user.rank}
      isOnline={user.isOnline}
      isDuringGame={user.isDuringGame}
    />
  ));

  return <div className="UsersList">{usersList}</div>;
}

export default UsersList;
