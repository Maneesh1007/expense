import { useContext, useRef } from "react";
import AuthContext from "../store/AuthContext";

const CompleteProfile = () => {
  const Authctx = useContext(AuthContext);
  const nameRef = useRef("");
  const profilePhotoRef = useRef("");

  const submitHandler = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBqVX_hW6BUUpe1061qr1J-wV_Ob4u66M4",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: Authctx.token,
          displayName: nameRef.current.value,
          photoUrl: profilePhotoRef.current.value,
          deleteAttribute: ["DISPLAY_NAME"],
          returnSecureToken: true,
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
    <>
      <div className="justify-content-center">
        <h1>Contact Details</h1>
        <button>Close</button>
      </div>
      <form onSubmit={submitHandler}>
        <label>Full Name</label>
        <input type="text" ref={nameRef} required></input>
        <label>Profile Photo Url</label>
        <input type="text" ref={profilePhotoRef} required></input>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default CompleteProfile;
