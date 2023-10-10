import { ChangeEvent, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { PlusCircle } from '@phosphor-icons/react'

import { CardTask } from '../Card'
import { TaskNotFound } from './TaskNotFound'

export function Task() {
  const [tasks, setTasks] = useState([])
  const [newTaskText, setNewTaskText] = useState('')

  const isNewTaskEmpty = newTaskText.length === 0
  const countTaskCreate = tasks.length > 0

  function handleNewTaskChange(
    event: ChangeEvent<HTMLElement | HTMLTextAreaElement>,
  ) {
    event?.target.setCustomValidity('')
    setNewTaskText(event?.target.value)
    console.log(newTaskText)
  }

  return (
    <div className="sm:w-1/2 w-[90%] mt-20 mx-auto relative -top-28">
      <div className="flex items-center gap-4 mb-20">
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
      </div>

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
            2 de 5
          </span>
        </div>
      </div>

      {tasks.length === 0 ? <TaskNotFound /> : <CardTask />}
    </div>
  )
}
