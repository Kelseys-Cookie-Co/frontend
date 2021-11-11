import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

import { Provider } from 'react-redux';

import { store, persistor } from './configureStore'
import { PersistGate } from 'redux-persist/integration/react'

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

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PayPalScriptProvider options={{ "client-id": process.env.REACT_APP_PAYPAL_ID }}>
          <Auth0Provider
            domain={process.env.REACT_APP_AUTH0_DOMAIN}
            clientId={process.env.REACT_APP_AUTH0_ID}
            redirectUri={window.location.origin}>
            <App />
          </Auth0Provider>
        </PayPalScriptProvider>
      </PersistGate>
    </Provider>
  </Router>,
  document.getElementById('root')
);