import { useState } from 'react';
import { useTasks } from '../../hooks/useTasks';
import { useUser } from '../../hooks/useUser';
import TaskCard from './TaskCard';
import TaskForm from './TaskForm';
import TaskFilters from './TaskFilters';

export default function TaskList() {
  const { tasks, loading, error } = useTasks();
  const { user } = useUser();
  const [showForm, setShowForm] = useState(false);
  const [filters, setFilters] = useState({
    status: '',
    assignee: '',
    search: ''
  });

  const filteredTasks = tasks?.filter(task => {
    return (
      (!filters.status || task.status === filters.status) &&
      (!filters.assignee || task.assignee?.email === filters.assignee) &&
      (!filters.search || task.title.toLowerCase().includes(filters.search.toLowerCase()))
    );
  });

  if (loading) return <div>Loading tasks...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="task-list ">
      <div className="task-controls">
        { user?.grade === 0 &&
          (<button onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Hide Form' : 'Create Task'}
          </button>)
          }
        <TaskFilters filters={filters} setFilters={setFilters} />
      </div>

      {showForm && <TaskForm />}

      <div className="tasks-grid">
        {filteredTasks?.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}