import { createBrowserRouter , RouterProvider , Outlet } from 'react-router-dom';
//Outlet: An <Outlet> should be used in parent route elements to render
//their child route elements. This allows nested UI to show up when child
// routes are rendered.
import './App.css';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Explore from './pages/Explore/Explore';
import Signin from './pages/Signin/signin';
import Navbar from './component/Navbar/Navbar';
import Error from './pages/Error/Error';

const Layout = () => {
  return (
    <div className='md:8/12 mx:auto'> 
    <Navbar /> 
  
      <Outlet></Outlet>
    </div>
  )
}

//start creating a router
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error />,
    element: <Layout />,
    children:[
      {path: "/" , //path you want to  go to
    element: <Home />, //page you will visting the above path
      },
      {
        path: "/profile/:id",
        element: <Profile/>
      },
      {
        path: "/explore",
        element: <Explore/>
      },
      {
        path: "/signin",
        element: <Signin/>
      },
      {
        path: "/signout",
        element: <Signin/>
      }
    ]
  }
])


function App() {
  return (
    <div>
  <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
 