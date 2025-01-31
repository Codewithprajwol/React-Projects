import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Todo from './pages/Todo.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
const router=createBrowserRouter([{
  path:'/',
  element:<App />,
  children:[{
    path:'/',
    element:<Home />
  },
{
  path:'about',
  element:<About/>
},
{
  path:'todo',
  element:<Todo />
}]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
