import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.jsx'
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Registration from './components/Registration.jsx';
import Eventpage from './components/Eventpage.jsx';
import Profile from './components/Profile.jsx';
// import Signup from './components/Signup.jsx';
import Aboutus from './components/Aboutus.jsx';
import { RouterProvider,createBrowserRouter} from 'react-router-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom'
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/Login",
        element:<Login/>,
      },
      {
        path:"/Registration",
        element:<Registration/>,
      },{
        path:"/Eventpage",
        element:<Eventpage/>,
      },
      {
        path:"/Profile",
        element:<Profile/>,
       },//{
      //   path:"/Signup",
      //   element:<Signup/>,
      // },
      {
        path:"/Aboutus",
        element:<Aboutus/>,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
