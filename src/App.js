import React from 'react';
import { useRoutes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Complete from './components/Complete'
import Cancel from './components/Cancel'
import Error from './components/Error'

export const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/cart", element: <Cart /> },
    { path: "/complete", element: <Complete /> },
    { path: "/cancel", element: <Cancel /> },
    { path: "/error", element: <Error /> }
  ]);
  return routes
}