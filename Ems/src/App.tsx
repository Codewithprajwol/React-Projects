import { RouterProvider } from "react-router-dom"
// import Login from "./components/auth/Login"
import { router } from "./main"



// import EmployeeDashboard from "./components/dashboard/EmployeeDashboard"

function App():JSX.Element {
  return (
    <>
    {/* <Login /> */}
     {/* <EmployeeDashboard /> */}
    <RouterProvider router={router}></RouterProvider>

    </>
  )
}

export default App