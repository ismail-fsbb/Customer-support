import React from 'react';

const TaskStatus = ({ taskStatus, handleComplete  }) => {
  return (
    <div className='space-y-3'>
      <h3 className='text-[#34485A] font-semibold text-2xl'>Task Status</h3>

      {taskStatus.length === 0 && (
        <p className='text-[#627382] text-base'>Select a ticket to add to Task Status</p>
      )}

      {taskStatus.map((task) => (
        <div key={task.id} className='p-4 rounded-lg bg-white space-y-1'>
          <h4 className='font-medium text-lg text-[#001931] capitalize'>{task.title}</h4>
          <button
            className='btn bg-[#02A53B] rounded w-full border-0 font-semibold text-base capitalize text-white'
            onClick={() => handleComplete(task)}
          >
            Complete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;
