import "./home.css";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <Link href="/login" className="btn">Login</Link>
      <Link href="/signup" className="btn">Sign Up</Link>
    </div>
  );
};

export default HomePage;
