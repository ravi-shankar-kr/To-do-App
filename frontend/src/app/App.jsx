import React, { useState } from 'react';
import Navigation from '../components/navigation';
import TaskCreate from '../features/task/pages/TaskCreate';

const App = () => {
  

  

  return (
    <div className='bg-black h-screen text-white '>
      <Navigation/>
      <TaskCreate/>
    </div>
  );
};

export default App;