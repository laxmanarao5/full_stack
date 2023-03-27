//import css
import './App.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
//import components
import RootComponent from './components/rootComponent/RootComponent';
import Home from './components/home/Home';
import Register from './components/register/Register';
import ContactUs from './components/contactUs/ContactUs';
import ErrorComponent from './components/errorComponent/ErrorComponent';
import UsersList from './components/usersList/UsersList';
import User from './components/usersList/User';
import Login from './components/login/Login';

import UserProfile from './components/userProfile/UserProfile'
function App() {

  //create router object
  const routerObject=createBrowserRouter([
    {
        path:"",
        element:<RootComponent/>,
        errorElement:<ErrorComponent/>,
        children:[
          {
            path:"",
            element:<Home/>
          },
          {
            path:"register",
            element:<Register/>
          },
          {
              path:"login",
              element:<Login/>
          },
          {
            path:"contact-us",
            element:<ContactUs/>
          },
          {
            path:"users-list",
            element:<UsersList/>
          },
          {
            path:"user/:id",
            element:<User/>
          },
          {
            path:"user-profile/:username",
            element:<UserProfile/>
          }
        ]
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={routerObject}/>
    </div>
  );
}

export default App;
