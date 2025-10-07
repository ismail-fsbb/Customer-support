import { useState } from 'react';
import './App.css';
import Banner from './components/banner';
import Footer from './components/shared/footer';
import Navbar from './components/shared/navbar';
import CustomerTickets from './components/customer-tickets';
import TaskStatus from './components/task-status';
import ResolvedTasks from './components/resolve-task';

const fetchTickets = async () => {
  const res = await fetch("/src/data/tickets.json");
  return res.json();
};
const ticketsPromise = fetchTickets();

function App() {
  const [progressCount, setProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [taskStatus, setTaskStatus] = useState([]);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  // Complete a task: move from taskStatus → resolvedTasks
  const handleComplete = (ticket) => {
    setTaskStatus(prev => prev.filter(t => t.id !== ticket.id));
    setResolvedTasks(prev => {
      if (!prev.find(t => t.id === ticket.id)) {
        return [...prev, ticket];
      }
      return prev;
    });

  	setResolvedCount(resolvedCount + 1);
  	setProgressCount(progressCount - 1);
  };

  return (
    <>
      <Navbar />
      <Banner progressCount={progressCount} resolvedCount={resolvedCount} />
      <div className="container pb-20 pt-10">
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <div className="col-span-8 space-y-5">
            <h3 className='text-[#34485A] font-semibold text-2xl'>Customer Tickets</h3>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <CustomerTickets
                ticketsPromise={ticketsPromise}
				progressCount={progressCount}
				setProgressCount={setProgressCount}
				taskStatus={taskStatus}
				setTaskStatus={setTaskStatus}
				resolvedTasks={resolvedTasks}
              />
            </div>
          </div>

          <div className="col-span-4 space-y-5">
            {/* Task Status */}
            <TaskStatus taskStatus={taskStatus} handleComplete={handleComplete} resolvedCount={resolvedCount} setResolvedCount={setResolvedCount} />

            {/* Resolved Tasks */}
            <ResolvedTasks resolvedTasks={resolvedTasks} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
