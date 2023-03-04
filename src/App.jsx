import { InputText, ListTask } from "./components/";
import { useTaskForm } from "../hooks/useTaskForm";
import { TaskContext } from "./components/context/taskContext";

export const App = () => {
  const [state, refImput, handleChange, handleQuitTask, editTask] = useTaskForm();

  return (
    <TaskContext.Provider value={{ handleQuitTask, editTask }}>
      <InputText onChange={handleChange} refInput={refImput} />
      <ListTask state={state} />
    </TaskContext.Provider>
  );
};
