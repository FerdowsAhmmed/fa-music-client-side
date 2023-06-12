import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error404 from './Error404';
import Home from './Home/Home';
import Main from './Layout/Main';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import AuthProvider from './Providers/AuthProvider';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
    ],
  },
  {
    path: "/*",
    element: <Error404></Error404>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
     
  </React.StrictMode>,
)
