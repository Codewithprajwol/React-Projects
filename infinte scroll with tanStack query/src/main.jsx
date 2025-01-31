import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Todo from './pages/Todo.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient=new QueryClient()

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
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
  <ReactQueryDevtools/>
  </QueryClientProvider>
)
