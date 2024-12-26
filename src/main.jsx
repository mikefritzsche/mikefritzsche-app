import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ResumePage from './pages/ResumePage';
import ServicesPage from './pages/ServicesPage';
import Layout from './components/Layout.jsx'
import AboutPage from "./pages/AboutPage.jsx";

export const routes = [
  {
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <App />
      },
      {
        path: "/resume",
        element: <ResumePage />
      },
      {
        path: "/services",
        element: <ServicesPage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
    ]
  },
]
const router = createBrowserRouter(routes)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
