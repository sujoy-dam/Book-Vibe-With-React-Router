import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx'
import ListedBooks from './components/ListedBooks/ListedBooks.jsx'
import PagesToRead from './components/PagesToRead/PagesToRead.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/listed-books",
        element:<ListedBooks></ListedBooks>
      },
      {
        path:"/pages-to-read",
        element:<PagesToRead></PagesToRead>
      }
    ]
    
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
