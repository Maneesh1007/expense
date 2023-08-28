import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>welcome to expense Tracker</h1>
      <div className="justify-content-end">
        <h3>
          your profile is incomplete<Link to="/profile">complete Now</Link>
        </h3>
      </div>
    </div>
  );
}

export default Home;
