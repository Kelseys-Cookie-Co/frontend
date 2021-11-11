import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios'

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isAuthenticated) {
    var getToken = {
      method: 'POST',
      url: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`,
      headers: {'content-type': 'application/x-www-form-urlencoded'},
      data: {
        grant_type: 'client_credentials',
        client_id: process.env.REACT_APP_AUTH0_ID,
        client_secret: process.env.REACT_APP_AUTH0_SECRET,
        audience: `https://${process.env.REACT_APP_DOMAIN}/api/v2/`
      }
    };
  
    let token;
    axios.request(getToken).then(function (response) {
      console.log(response.data);
      token = response.data
    }).catch(function (error) {
      console.error(error);
    });
  
    const getUser = {
      method: 'PATCH',
      url: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/api/v2/users/${user.user_id}`,
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${token}`,
        'cache-control': 'no-cache'
      },
      data: '{ "name": NAME_VALUE }'
    };
  
    axios.request(getUser)
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <h2>Welcome Back {user.given_name}!</h2>
      </div>
    )
  );
};