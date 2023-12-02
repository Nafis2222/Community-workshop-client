import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Home';
import Basic from './Basic';
import AuthProvider from './AuthProvider';
import Login from './Login';
import Register from './Register';
import Addproducts from './Addproducts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element : <Basic></Basic>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addServices",
        element: <Addproducts></Addproducts>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<div className='max-w-6xl mx-auto'>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
</div> 
 </React.StrictMode>,
)
