import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/AuthContext";

function Home() {
  const Authctx = useContext(AuthContext);
  const emailHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBqVX_hW6BUUpe1061qr1J-wV_Ob4u66M4",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "VERIFY_EMAIL",
          idToken: Authctx.token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <h1>welcome to expense Tracker</h1>
      <button onClick={emailHandler}>Verify Email</button>
      <div className="justify-content-end">
        <h3>
          your profile is incomplete<Link to="/profile">complete Now</Link>
        </h3>
      </div>
    </div>
  );
}

export default Home;
