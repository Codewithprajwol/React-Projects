import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter} from "react-router-dom"
import AdminDashboard from "./components/dashboard/AdminDashboard"
import CreateTask from "./components/dashboard/adminOutlets/CreateTask"
import Dashboard from './components/dashboard/adminOutlets/Dashboard.tsx'
import AuthProvider from './context/AuthProvider.tsx'

export const router=createBrowserRouter([{
  element:<AdminDashboard />,
  path:'/',
  children:[
    {
      element:<Dashboard/>,
      path:""
    },
    {
    element:<CreateTask />,
    path:"/admin/createTask"
  },
 ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
   
    
  </StrictMode>,
)
