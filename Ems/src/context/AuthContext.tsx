import { ReactNode } from "react"

type AuthContextProps={
  children:ReactNode;
}
const AuthContext:React.FC <AuthContextProps> = ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default AuthContext