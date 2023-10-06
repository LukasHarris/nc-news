import { useContext } from "react";
import { Link } from "react-router-dom";

import UserContext from "./contexts/user.context";

import UserLogin from "./components/UserLogin";

//import "./App.css";

export default function HomePage() {
  const [currentUser, setCurrentUser] = useContext(UserContext);

  function handleLogout(event) {
    event.preventDefault();
    setCurrentUser(null);
  }

  return (
    <main>
      <h2>Home</h2>
      Welcome to NorthCoders News
      {!currentUser ? (
        <UserLogin setCurrentUser={setCurrentUser} />
      ) : (
        <p>
          Currently Logged in as {currentUser.name}
          <Link to="/" onClick={handleLogout}>
            Logout
          </Link>
        </p>
      )}
    </main>
  );
}
