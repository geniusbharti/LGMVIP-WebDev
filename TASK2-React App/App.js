import React, { useState } from "react";

import "./styles.css";

function App() {

  const [users, setUsers] = useState([]);

  const userInfo = async () => {
    const response = await fetch("https://reqres.in/api/users?page=1");

    const jsonresponse = await response.json();

    setUsers(jsonresponse.data);
  };

  return (
    <div className="App">
      <div className="navbar">
        <h2>Welcome!</h2>
        <button onClick={userInfo}>Get Users</button>
      </div>


      <div className="grid">
        {users.map(({ id, first_name, last_name, avatar, email }) => (
          <div className="card">
            <div className="picture">
              <img src={avatar}></img>
            </div>
            <hr></hr>
            <div>
              <h3>{first_name} {last_name}</h3>
              <p>{email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
