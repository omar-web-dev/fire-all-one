import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import ErrorPage from '../Pages/ErrorPage'
import Home from '../Pages/Home'
import SingIn from "../Pages/SingIn";
import SingUp from "../Pages/SingUp";
import Statistics from "../Pages/Statistics";


export const router = createBrowserRouter([
  {
    path : '/' ,
    element : <Main></Main>,
    children : [
      {
        path : '/',
        element : <Home/>
      },
      {
        path : 'home',
        element : <Home/>
      },
      {
        path : 'sing-in',
        element : <SingIn/>
      },
      {
        path : 'sing-up',
        element : <SingUp/>
      },
      {
        path : 'statistics',
        element : <Statistics/>
      },
    ],
    errorElement : <ErrorPage></ErrorPage>
  }
])