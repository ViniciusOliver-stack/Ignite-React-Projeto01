import { ChangeEvent, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { PlusCircle } from '@phosphor-icons/react'

import { CardTask } from '../Card'
import { TaskNotFound } from './TaskNotFound'

export function Task() {
  const [tasks, setTasks] = useState<string[]>([])
  const [newTaskText, setNewTaskText] = useState('')
  const [taskCompleted, setTaskCompleted] = useState<number[]>([])

  const isNewTaskEmpty = newTaskText.length === 0
  const countTaskCreate = tasks.length > 0

  function handleTaskDone(taskToDone: string) {
    const updatedCompleteTask = [...taskCompleted]

    if (!updatedCompleteTask.includes(taskToDone)) {
      updatedCompleteTask.push(taskToDone)
    } else {
      const taskIndex = updatedCompleteTask.indexOf(taskToDone)
      updatedCompleteTask.splice(taskIndex, 1)
    }

    setTaskCompleted(updatedCompleteTask)
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event?.target.setCustomValidity('')
    setNewTaskText(event?.target.value)
  }

  function handleCreateNewTask(event: React.FormEvent) {
    event?.preventDefault()
    setTasks([...tasks, newTaskText])
    setNewTaskText('')
  }

  function handleDeleteTask(taskToDelete: string) {
    const deleteTask = tasks.filter((task) => {
      return task !== taskToDelete
    })

    setTasks(deleteTask)
  }

  return (
    <div className="sm:w-1/2 w-[90%] mt-20 mx-auto relative -top-28">
      <form
        onSubmit={handleCreateNewTask}
        className="flex items-center gap-4 mb-20"
      >
        <Input
          className="max-w-48 h-14 bg-gray_primary-500 border border-gray_primary-700 placeholder:text-gray_primary-300 focus:outline-none focus:border-purple-500"
          placeholder="Adicione uma nova tarefa"
          required
          onChange={handleNewTaskChange}
          value={newTaskText}
        />
        <Button
          className={`h-14 bg-blue_color-700 text-gray_primary-100 hover:bg-blue_color-600 transition-all duration-100 ${
            isNewTaskEmpty ? 'cursor-not-allowed' : 'cursor-pointer'
          }`}
          disabled={isNewTaskEmpty}
        >
          Criar
          <PlusCircle size={24} className="text-gray_primary-100" />
        </Button>
      </form>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-b-gray_primary-400 pb-6">
        <div className="flex items-center gap-3">
          <p className="text-blue_color-600 font-bold text-base">
            Tarefas criadas
          </p>
          <span className="bg-gray_primary-400 px-2 rounded-full text-gray_primary-200 font-bold text-base">
            {countTaskCreate ? `${tasks.length}` : '0'}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-blue_color-600 font-bold text-base">Concluídas</p>
          <span className="bg-gray_primary-400 px-2 rounded-full text-gray_primary-200 font-bold text-base">
            {taskCompleted.length} de {tasks.length}
          </span>
        </div>
      </div>

      {tasks.length === 0 ? (
        <TaskNotFound />
      ) : (
        <div>
          {tasks.map((task, index) => {
            return (
              <CardTask
                key={index}
                content={task}
                onDeleteTask={handleDeleteTask}
                onDoneTask={() => handleTaskDone(task)}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}
