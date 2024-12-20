import { ReactNode } from "react"

type TaskContextProps={
  children:ReactNode;
}
const TaskContext:React.FC <TaskContextProps>= ({children}) => {
  return (
    <div>{children}</div>
  )
}

export default TaskContext