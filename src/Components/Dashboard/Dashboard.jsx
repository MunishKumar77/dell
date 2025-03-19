import { useAuth } from '../AuthContext/AuthContext';
import './dashboard.css'



  const Dashboard = () => {
  const { logout, user } = useAuth();
  
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h2>Dashboard</h2>
        <button onClick={() => logout()} className="btn btn-red">Logout</button>
      </header>
      <div className="dashboard-content">
        <h3>Welcome, {user.username}</h3>
        <Profile />
        <Settings />
        <Activity />
      </div>
    </div>
  );
};

const Profile = () => <div className="card">👤 Profile Info</div>;
const Settings = () => <div className="card">⚙️ Account Settings</div>;
const Activity = () => <div className="card">📊 Recent Activity</div>;

export default Dashboard;
