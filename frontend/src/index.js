import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { cartReducer } from './state/cartReducer';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import { Auth0Provider } from '@auth0/auth0-react'
import Home from './components/Home'
import Cart from './components/Cart'
import Complete from './components/Complete'
import Cancel from './components/Cancel'
import Error from './components/Error'

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/complete", element: <Complete /> },
    { path: "/cancel", element: <Cancel /> },
    { path: "/error", element: <Error /> }
  ]);
  return routes
}

const store = createStore(cartReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_ID }}>
        <Auth0Provider
          domain={process.env.REACT_APP_AUTH0_DOMAIN}
          clientId={process.env.REACT_APP_AUTH0_ID}
          redirectUri={window.location.origin}>
          <App />
      </Auth0Provider>
      </PayPalScriptProvider>
    </Provider>
  </Router>,
  document.getElementById('root')
);