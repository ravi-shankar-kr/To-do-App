import React from 'react'

const navigation = () => {
  return (
    <div>
        <nav className='flex justify-between items-center px-20 py-5 border-b border-gray-700'>
            <h1 className='font-bold text-2xl cursor-pointer hover:text-blue-500 transition-colors duration-300 scale-110'>TO-DO-APP</h1>
            <ul className='flex gap-10 '>
                 <h4 className='cursor-pointer hover:bg-blue-500 transition-colors duration-300 scale-110 font-semibold border border-gray-700 rounded-lg px-4 py-2 active:scale-95 duration-150'>Create Task</h4>
                 <h4 className='cursor-pointer hover:bg-blue-500 transition-colors duration-300 scale-110 font-semibold border border-gray-700 rounded-lg px-4 py-2 active:scale-95 duration-150'>Get Task</h4>
            </ul>
        </nav>
    </div>
  )
}

export default navigation