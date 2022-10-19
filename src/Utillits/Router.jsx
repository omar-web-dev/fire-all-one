import { createBrowserRouter } from "react-router-dom";
import Main from '../Layout/Main'
import ErrorPage from '../Pages/ErrorPage'
import Home from '../Pages/Home'
import SingIn from "../Pages/SingIn";
import SingUp from "../Pages/SingUp";


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
    ],
    errorElement : <ErrorPage></ErrorPage>
  }
])