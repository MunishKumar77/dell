import { useAuth } from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupPage = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    if (signup(username, password)) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup} className="btn btn-red">Sign Up</button>
    </div>
  );
};

export default SignupPage;
