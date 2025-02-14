import { useTasks } from "../../hooks/useTasks";
import { useUser } from "../../hooks/useUser";
import { Task } from "../../types";
import { Assignee } from "../../types";

export default function TaskCard({ task }: { task: Task }) {
  const { updateTask, deleteTask, assignTask } = useTasks();
  const { user } = useUser();
  console.log("User in taskCard:", user);
  const handleStatusChange = async (newStatus: Task['status']) => {
    await updateTask(task.id, { status: newStatus });
  };
  const handleAssignToMe = async () => {
    if (user) {
      const assignee: Assignee = {_id: user.id, email: user.email};
      await assignTask(task.id, assignee);
    }
  };
  // console.log("task.assignee:", task.assignee);
  return (
    <div className={`task-card ${task.status} border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow mb-4 p-4 bg-white`}>
      {/* Task Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {task.title}
        </h3>
        
        {user?.grade === 0 && (
          <button 
            className="px-3 py-1.5 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition-colors"
            onClick={() => deleteTask(task.id)}
          >
            Delete
          </button>
        )}
      </div>
  
      {/* Task Content */}
      <div className="flex flex-col md:flex-row justify-between gap-4">
        {/* Task Description */}
        <p className="text-gray-600 flex-1">
          {task.description}
        </p>
  
        {/* Task Metadata */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-3">
          {/* Status Selector */}
          <select 
            value={task.status} 
            className="px-3 py-1.5 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleStatusChange(e.target.value as Task['status'])}
          >
            <option value="todo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
  
          {/* Assignment Section */}
          <div className="flex items-center gap-2">
            {!task.assignee && user?.grade === 1 && (
              <button 
                className="px-3 py-1.5 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
                onClick={handleAssignToMe}
              >
                Assign to Me
              </button>
            )}
  
            {task.assignee && (
              <div className="flex items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-md">
                <span className="text-sm text-gray-600">Assigned to:</span>
                <span className="text-sm font-medium text-gray-800">
                  {task.assignee?.email}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
  
      {/* Status Indicator */}
      <div className={`mt-4 h-1 rounded-full ${
        task.status === 'todo' ? 'bg-gray-300' :
        task.status === 'in progress' ? 'bg-yellow-400' :
        'bg-green-500'
      }`}></div>
    </div>
  );
}