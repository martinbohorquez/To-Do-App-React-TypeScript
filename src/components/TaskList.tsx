import { Task } from "./Task"

type TaskList = {
    taskList: string[]
    deleteTask: (index: number) => void
}

export const TaskList = ({taskList, deleteTask}: TaskList) => {
  return (
      <div className="taskList">
          {taskList.map((task, index) => (
              <Task key={index} task={task} deleteTask={() => deleteTask(index)}></Task>
          )
          )}
    </div>
  )
}