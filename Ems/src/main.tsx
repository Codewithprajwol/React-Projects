import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter} from "react-router-dom"
import AdminDashboard from "./components/dashboard/AdminDashboard"
import CreateTask from "./components/dashboard/adminOutlets/CreateTask"
import Dashboard from './components/dashboard/adminOutlets/Dashboard.tsx'
import Login from './components/auth/Login.tsx'
export const router=createBrowserRouter([{
  element:<AdminDashboard />,
  path:'/admin',
  children:[
    {
      element:<Dashboard/>,
      path:"/admin"
    },
    {
    element:<CreateTask />,
    path:"/admin/createTask"
  },
 ]
},
{
  element:<Login/>,
  path:'/'
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
