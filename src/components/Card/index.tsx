import { useEffect, useState } from 'react'
import { Trash, Check } from '@phosphor-icons/react'

interface CardTaskProps {
  content: string
  onDeleteTask: (task: string) => void
  onDoneTask: (taskDone: string) => void
  isChecked: boolean
}

export function CardTask({
  content,
  onDeleteTask,
  onDoneTask,
  isChecked,
}: CardTaskProps) {
  const [checked, setChecked] = useState(isChecked)

  useEffect(() => {
    setChecked(isChecked) // Atualiza o estado isChecked quando a propriedade isChecked muda
  }, [isChecked])

  function handleCheckboxChange() {
    setChecked(!checked) // Altera o estado isChecked
    onDoneTask(content) // Chama a função para marcar a tarefa como concluída
  }

  function handleDeleteTask() {
    onDeleteTask(content) // Chama a função para excluir a tarefa
  }

  return (
    <div className="flex gap-3 bg-gray_primary-500 px-6 py-4 rounded-md mt-8 border border-gray_primary-400">
      <div className="flex items-center space-x-2 cursor-pointer">
        <div
          className={`w-4 h-4 border border-blue_color-600 rounded-full flex items-center justify-center transition duration-300 ease-in-out ${
            checked ? 'bg-purple_color-700 border-purple_color-700' : ''
          }`}
          onClick={handleCheckboxChange}
        >
          {checked && <Check size={10} className="text-white font-bold" />}
        </div>
      </div>
      <p
        className={`${
          checked &&
          'line-through text-gray_primary-300 transition-all duration-300'
        } text-gray_primary-100 font-normal w-full`}
      >
        {content}
      </p>
      <button>
        <Trash
          size={20}
          className="text-gray_primary-300 hover:text-danger_color-700 transition-all duration-200"
          onClick={handleDeleteTask}
        />
      </button>
    </div>
  )
}
