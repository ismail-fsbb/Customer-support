import React from 'react';

const ResolvedTasks = ({ resolvedTasks }) => {
  return (
    <div className='space-y-3'>
      <h3 className='text-[#34485A] font-semibold text-2xl'>Resolved Tasks</h3>

      {resolvedTasks.length === 0 ? (
        <p className='text-[#627382] text-base'>No resolved tasks yet.</p>
      ) : (
        resolvedTasks.map((task) => (
          <div key={task.id} className='p-4 rounded-lg bg-[#E0E7FF] space-y-1'>
            <h4 className='font-medium text-lg text-[#001931] capitalize'>{task.title}</h4>
          </div>
        ))
      )}
    </div>
  );
};

export default ResolvedTasks;
