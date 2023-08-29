import { useRef } from "react";
//import AuthContext from "../store/AuthContext"
import Styles from "../pages/Auth.module.css";
import { useHistory } from "react-router-dom";

const ForgotPassword = () => {
  const forgotref = useRef("");
  const history = useHistory("");

  const forgotHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBqVX_hW6BUUpe1061qr1J-wV_Ob4u66M4",
      {
        method: "POST",
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: forgotref.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      history.replace("/");
    }

    const data = response.json();
    console.log(data);
  };

  return (
    <section className={Styles.auth}>
      <form onSubmit={forgotHandler}>
        <div className={Styles.control}>
          <label>Enter the email with which you have registered</label>
          <input type="text" ref={forgotref} required />
        </div>
        <div className={Styles.actions}>
          <button className={Styles.toggle}>Send Link</button>
        </div>
      </form>
    </section>
  );
};

export default ForgotPassword;
