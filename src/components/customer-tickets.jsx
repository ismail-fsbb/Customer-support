import React, { use } from 'react';

const CustomerTickets = ({
  ticketsPromise,
  progressCount,
  setProgressCount,
  taskStatus,
  setTaskStatus,
  resolvedTasks
}) => {
  const ticketsData = use(ticketsPromise);

  const handleClick = (ticket) => {
    if (!taskStatus.find(t => t.id === ticket.id)) {
      setProgressCount(prev => prev + 1);
      setTaskStatus(prev => [...prev, ticket]);
    }
  };

  // Filter out tickets that are already in Task Status OR Resolved Tasks
  const availableTickets = ticketsData.filter(ticket => 
    !taskStatus.find(t => t.id === ticket.id) &&
    !resolvedTasks.find(t => t.id === ticket.id)
  );

  return (
    <>
      {availableTickets.map((ticket, index) => (
        <div
          key={ticket.id || index}
          className='p-4 rounded-lg bg-white space-y-1 cursor-pointer hover:shadow-md transition'
          onClick={() => handleClick(ticket)}
        >
          <div className='flex gap-2 justify-between'>
            <h4 className='font-medium text-lg text-[#001931] capitalize'>
              {ticket.title}
            </h4>
            <div className='bg-[#B9F8CF] py-1 px-3 rounded-full w-fit text-[#0B5E06] flex gap-2 items-center justify-center'>
              <div className='w-4 h-4 rounded-full bg-[#02A53B]'></div>
              {ticket.status}
            </div>
          </div>

          <p className='text-[#627382] text-base'>{ticket.description}</p>

          <div className='grid grid-cols-2 gap-4'>
            <div className='flex gap-2 items-center'>
              <p className='text-[#627382]'>#<span>{ticket.id}</span></p>
              <p className='text-[#F83044] font-medium text-sm uppercase'>{ticket.priority} PRIORITY</p>
            </div>
            <div className='flex items-center gap-4'>
              <p className='text-[#627382] text-sm'>{ticket.customer}</p>
              <div className='flex gap-2'>
                <img src="/calender.svg" alt="Calendar" />
                <p className='text-[#627382]'>{ticket.createdAt}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CustomerTickets;
