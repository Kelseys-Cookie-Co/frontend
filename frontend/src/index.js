import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { cartReducer } from './state/cartReducer';
import Home from './components/Home'
import Cart from './components/Cart'

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
  ]);
  return routes
}

const store = createStore(cartReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Auth0Provider
        domain={process.env.REACT_APP_DOMAIN}
        clientId={process.env.REACT_APP_CLIENT_ID}
        redirectUri={window.location.origin}>
        <App />
      </Auth0Provider>
    </Provider>
  </Router>,
  document.getElementById('root')
);