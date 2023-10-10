import { ClipboardText } from '@phosphor-icons/react'

export function TaskNotFound() {
  return (
    <div className="w-full h-52 flex flex-col gap-6 items-center justify-center text-center">
      <ClipboardText size={50} className="text-gray_primary-300" />

      <p className="text-gray_primary-300 text-xl">
        <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}
