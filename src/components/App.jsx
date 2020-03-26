import React from "react";
import Login from "./Login";

const isLoggedIn = true;
const currentTime = new Date(2020, 3, 25, 13).getHours();

function App() {
  return (
    <div className="container">
      {isLoggedIn ? currentTime > 12 && <h1>Hello</h1> : <Login />}
    </div>
  );
}

export default App;
