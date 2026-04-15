import React, { useState } from 'react'
import { useTask } from '../hooks/task.hooks';
// import {useNavigate} from "react-router-dom"

const TaskCreate = () => {
    
    const {handleTask} = useTask();
    // const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [data, setData] = useState({
      title: "",
      description:""
    });
     
     
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);
    console.log(data);
    

    await handleTask(data);

    setData({
      title: "",
      description: ""
    });

  } catch (error) {
    alert("Error creating task");
  } finally {
    setLoading(false);
  }
};
  
  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      
      <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-700">
        <div className="px-8 py-6">
          <h2 className="text-3xl font-extrabold text-white text-center mb-8">Add New Task</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
                Task Title
              </label>
              <input
                type="text"
                id="title"
                value={data.title}
                onChange={(e) => setData({ ...data, title: e.target.value })}
                placeholder="E.g., Complete project presentation"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                required
              />
            </div>
            
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                id="description"
                value={data.description} 
                 onChange={(e) => setData({ ...data, description: e.target.value })}
                placeholder="Add more details about this task..."
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-600 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 resize-none"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
             {loading ? "Adding..." : "Add Task"}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TaskCreate