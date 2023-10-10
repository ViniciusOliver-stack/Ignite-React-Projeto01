import logoToDo from '../../assets/logo_todo.svg'

export function Header() {
  return (
    <div className="w-full h-52 flex flex-col items-center justify-center bg-gray_primary-700 relative">
      <img alt="Logo ToDo" src={logoToDo} />
    </div>
  )
}
