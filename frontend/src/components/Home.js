import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'
import { Profile } from './Profile'
import { Cookies } from './Cookies'

const Home = () => {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <>
    <button onClick={() => loginWithRedirect()}>Log In</button>
    <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
    </button>
    <Link to='/cart'>Cart</Link>
    <Profile />

    <h1>Kelsey's Cookie Co.</h1>
    <Cookies />
    </>
  )
};

export default Home