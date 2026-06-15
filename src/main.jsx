import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router'
import App from './pages/App.jsx'
import Home from './pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: "Main",
    element: <App />,
  },
  {
     path: "",
    element: <Home />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
