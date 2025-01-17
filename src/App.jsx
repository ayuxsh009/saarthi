import Header from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer"
import "./index.css"
import HomePage from "./Components/HomePage"
import About from "./Components/About"
import { createBrowserRouter,RouterProvider } from 'react-router-dom';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/About',
      element: <About />,
    },
    {
      path: '/Home',
      element: <HomePage />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}


export default App
