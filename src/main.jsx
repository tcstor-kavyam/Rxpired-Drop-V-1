import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import CreateProfile from './createProfile.jsx';
import HomePage from './homePage.jsx';
import AddMedicine from './addMedicine.jsx';
import EveryPillDrop from './everyPilldrop.jsx';
import DisposeExpired from './disposeExpired.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/create-profile',
    element: <CreateProfile />,
  },
  {
    path: '/home',
    element: <HomePage />,
  }, 
  {
    path: '/add-medicine',
    element: <AddMedicine />,
  },
  {
    path: '/everyPilldrop',
    element: <EveryPillDrop />,
  },
  {
  path: '/disposeExpired',
  element: <DisposeExpired />,
  }

  
  
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

