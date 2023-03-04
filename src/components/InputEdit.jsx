export const InputEdit = ({ task, changeTask }) => {
  const onChange = (event) => {
    changeTask(event.target.value);
  };

  return (
    <input
      onChange={onChange}
      type="text"
      className="px-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full text-black"
      value={task}
    />
  );
};
