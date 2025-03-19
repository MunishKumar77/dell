import "./home.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Our Website</h1>
      <a href="/login" className="btn">Login</a>
      <a href="/signup" className="btn">Sign Up</a>
    </div>
  );
};

export default HomePage;
