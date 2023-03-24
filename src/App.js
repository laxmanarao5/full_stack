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
