import { useState } from 'react'
import { Trash, Check } from '@phosphor-icons/react'

export function CardTask() {
  const [isChecked, setIsChecked] = useState(false)

  function handleCheckboxChange() {
    setIsChecked(!isChecked)
  }

  return (
    <div className="flex gap-3 bg-gray_primary-500 px-6 py-4 rounded-md mt-8 border border-gray_primary-400">
      <div className="flex items-center space-x-2 cursor-pointer">
        <div
          className={`w-4 h-4 border border-blue_color-600 rounded-full flex items-center justify-center transition duration-300 ease-in-out ${
            isChecked ? 'bg-purple_color-700 border-purple_color-700' : ''
          }`}
          onClick={handleCheckboxChange}
        >
          {isChecked && <Check size={10} className="text-white font-bold" />}
        </div>
      </div>
      <p
        className={`${
          isChecked &&
          'line-through text-gray_primary-300 transition-all duration-300'
        } text-gray_primary-100 font-normal`}
      >
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button>
        <Trash
          size={20}
          className="text-gray_primary-300 hover:text-danger_color-700 transition-all duration-200"
        />
      </button>
    </div>
  )
}
