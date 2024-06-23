// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.tsx';
import Dashboard from './routes/Dashboard.tsx';
import Test from './routes/Test.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/dashboard/:symbol',
    element: <Dashboard/>
  },
  {
    path: '/test',
    element: <Test/>
  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <RouterProvider  router={router}/>
  // </React.StrictMode>
)
