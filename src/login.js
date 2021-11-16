import React, { useState } from "react";
import { useHistory } from "react-router";
import "./login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        history.push("/homepage");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="LoginContainer">
      <h1 className="header">Sign in to save points and receive discount!</h1>
      <div className="FormContainer">
        <h2>Sign In</h2>
        <form className="FormContain" onSubmit={SignIn}>
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="login_signinbutton" type="submit">
            Sign In
          </button>
        </form>
        <div className="Signup">
          <ArrowForwardIosIcon sx={{ fontSize: 15 }} />
          <Link to="/signup" style={{ color: "#FFF", fontSize: "14px" }}>
            {" "}
            Do not have an account?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
