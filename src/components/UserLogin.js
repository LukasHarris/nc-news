import { useEffect, useState } from "react";

import { getAuthors } from "../utils/api";

import ErrorsList from './ErrorsList';
import '../App.css';


export default function UserLogin({ setCurrentUser }) {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState();
  const [inputUsername, setInputUsername] = useState('');
  const [errors, setErrors] = useState([]);
  
  useEffect(() => {
    // Users with API not implemented so faked it with author names aka usernames.
    getAuthors().then( users => { 
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

    if (users.find( user => user === inputUsername )) {
      setCurrentUser(inputUsername);
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