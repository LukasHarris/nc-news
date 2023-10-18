import { useEffect, useState } from "react";

import { signIn, getUserById } from "../utils/api";

import ErrorsList from './ErrorsList';
//import '../App.css';

export default function UserLogin({ currentUser, setCurrentUser }) {
  const [isLoading, setIsLoading] = useState(true);
//  const [users, setUsers] = useState();
  const [inputUsername, setInputUsername] = useState('');
  const [errors, setErrors] = useState([]);
  
  useEffect(() => {
      setIsLoading(false);
  }, []);

  function handleLoginChange(event) {
    const { value } = event.target;
    setInputUsername(value);
  }

  function handleLoginSubmit(event) {
    event.preventDefault();
    // TBD Refactor side effect on currentUser?
    signIn({
      "username": inputUsername,
      "password": "pa5$word" // Default Password
    }).then( token => {
      return token;
    }).then( token => {
      getUserById({ 
        username: inputUsername,
        token 
      }).then((user) => {
        setCurrentUser({ ...user, token });
      });
    });
    
    if (currentUser) {
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