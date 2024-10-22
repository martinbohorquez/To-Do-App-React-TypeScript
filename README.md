## Tutorial: Cómo hacer una lista de tareas en React con TypeScript

En este tutorial, aprenderás cómo crear una simple lista de tareas utilizando React con TypeScript. Vamos a utilizar los componentes funcionales de React, el estado local y las propiedades tipadas. Al finalizar, tendrás una aplicación que te permitirá agregar y borrar tareas de una lista.

### Paso 1: Configuración del proyecto

Antes de comenzar, asegúrate de tener Node.js y npm (o yarn) instalados en tu sistema. Luego, puedes crear un nuevo proyecto React con TypeScript ejecutando el siguiente comando en tu terminal:

```
npm create vite
```

Luego seguir las instrucciones del video creando un proyecto React con Typescript

### Paso 2: Crear los componentes

- `TodoApp.tsx`: Este será el componente principal de la aplicación.
- `Task.tsx`: Componente para representar una tarea individual.
- `TaskList.tsx`: Componente que mostrará la lista de tareas.

### Paso 3: Implementar la funcionalidad

#### `Task.tsx`

```
type Task = {
    task: string
    deleteTask: () => void
}

export const Task = ({task, deleteTask}: Task) => {
  return (
      <div className="task">
          <span>{task}</span>
          <button onClick={deleteTask}>Delete Task</button>
    </div>
  )
}
```

#### `TaskList.tsx`

```
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
```

```
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
```

### Paso 4: Ejecutar la aplicación

Finalmente, para ver tu aplicación en acción, ejecuta el siguiente comando en tu terminal:

```
npm run dev
```

Esto abrirá tu aplicación en el navegador. Ahora deberías poder agregar y borrar tareas en tu lista de tareas.

### Capturas de imagen:
![To-Do List](https://github.com/user-attachments/assets/2df6a932-6ff0-4662-a120-80dfc2164e5c)

