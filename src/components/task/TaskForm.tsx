import { useState } from 'react';
import { useTasks } from '../../hooks/useTasks';

export default function TaskForm() {
  const { createTask } = useTasks();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'todo' as const,
    labels: [] as string[],
    dueDate: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createTask({
      ...formData,
      dueDate: formData.dueDate ? new Date(formData.dueDate) : undefined
    });
    setFormData({
      title: '',
      description: '',
      status: 'todo',
      labels: [],
      dueDate: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form flex flex-row justify-between ml-2 w-[90%] border-spacing-1 py-5">
      <input
        type="text"
        className='p-2 border w-[15%] text-center'
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      
      <textarea
      className='border w-[40%] p-2 text-center'
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
      />
      
      <input
      className='border w-[20%] p-2 text-center'
        type="date"
        value={formData.dueDate}
        onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
      />
      
      <button type="submit" className='border p-3 rounded-lg my-3 bg-slate-500'>Create Task</button>
    </form>
  );
}