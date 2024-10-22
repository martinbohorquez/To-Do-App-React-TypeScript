import { useState } from "react"
import { TaskList } from "./TaskList"
export const TodoApp =() => {
    const [newTask, setNewTask] = useState<string>('')
    const [taskList, setTaskList] = useState<string[]>([])

    const handleAddTask = () => {
        if (newTask.trim() === '') return
        setTaskList(tareas => [...tareas, newTask])
        setNewTask('')
    }

    const handleDeleteTask = (index: number) => {
        setTaskList(tareas => tareas.filter((_, i) => i !== index))
    }

  return (
      <div>
          <h1>To-Do List</h1>
          <div className="flex">
              <input type="text"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  placeholder="New task"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                    handleAddTask(); // Llama a la función al presionar Enter
                    }
                }}
              />
              <button onClick={handleAddTask}>Add Task</button>
          </div>
          <TaskList taskList={taskList} deleteTask={handleDeleteTask}></TaskList>
    </div>
  )
}