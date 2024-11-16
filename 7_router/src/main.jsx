import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contest from './components/contest/contest.jsx'
import Github from './components/github/Github.jsx'

const router = createBrowserRouter([
{
  path: '/',
  element: <Layout />,
  children: [
    {
      path: "",
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/contest',
      element: <Contest />
    },
    {
      path: '/github',
      element: <Github />
    }
  ]
},
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)