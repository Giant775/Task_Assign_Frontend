
export default function TaskFilters({ filters, setFilters }: {
  filters: {
    status: string;
    assignee: string;
    search: string;
  };
  setFilters: React.Dispatch<React.SetStateAction<{
    status: string;
    assignee: string;
    search: string;
  }>>;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8 p-4 bg-gray-50 rounded-lg shadow-sm">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={filters.search}
        onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent flex-1"
      />
  
      {/* Status Filter */}
      <select
        value={filters.status}
        onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <option value="">All Statuses</option>
        <option value="todo">To Do</option>
        <option value="inProgress">In Progress</option>
        <option value="completed">Completed</option>
      </select>

  
      {/* Clear Filters Button */}
      <button
        onClick={() => setFilters({ search: '', status: '', assignee: '' })}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
      >
        Clear Filters
      </button>
    </div>
  );
}