import { useEffect, useState } from "react";

import { getUsers } from "../utils/api";

import ErrorsList from './ErrorsList';
import '../App.css';

export default function UserLogin({ setCurrentUser }) {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState();
  const [inputUsername, setInputUsername] = useState('');
  const [errors, setErrors] = useState([]);
  
  useEffect(() => {
    // Users with API not implemented so faked it with author names aka usernames.
    getUsers().then( users => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  function handleLoginChange(event) {
    const { value } = event.target;
    setInputUsername(value);
  }

  function handleLoginSubmit(event) {
    event.preventDefault();
    const currentUser = users.find( user => user.username === inputUsername );
    if (currentUser) {
      setCurrentUser(currentUser);
      setErrors([]);
    } else {
      setErrors( currentErrors => [ { message: 'User name not found, please try again.' } ]);
    };
    // Filter commemts by current user for deletes etc.
  }

  if (isLoading) return <h2>Loading...</h2>;

  return (
    <section id="user-login">
      <h2>Login</h2>
      <ErrorsList errors={errors} />
      <form onSubmit={handleLoginSubmit}>
        <label>
          Username
          <input type="text" value={inputUsername} placeholder="username" onChange={handleLoginChange} />
        </label>
        <input type="submit" value="Login" />
      </form>
    </section>
  );

}