import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css';
import App from './App';
import AboutPage from './Components/pages/AboutPage';
//import NotFoundPage from './Components/pages/NotFoundPage';
import MembershipPage from './Components/pages/MembershipPage';
import PersonalTrainingPage from './Components/pages/PersonalTrainingPage';
import HomePage from './Components/pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <p>page not found</p> 
  },
  {
    path: '/About',
    element: <AboutPage />,
  },
  {
    path: '/Memberships',
    element: <MembershipPage />,
  },
  {
    path: '/Personal-Training',
    element: <PersonalTrainingPage />,
  }


]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

