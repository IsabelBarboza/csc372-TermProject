import { Link } from "react-router-dom";

export default function Navbar({ setLoggedIn }) {
  return (
    <nav className="navbar">
      <h2>StudySync</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/tasks">Tasks</Link>
        <Link to="/motivation">Motivation</Link>
           
            <button
            onClick={() => {
                setLoggedIn(false);
                localStorage.removeItem("loggedIn");
                localStorage.removeItem("userId");
            }}
            >
            Logout
            </button>
      </div>
    </nav>
  );
}