import { InputText, ListTask } from "./components/";
import { useTaskForm } from "../hooks/useTaskForm";
import { TaskContext } from "./components/context/taskContext";

export const App = () => {
  const [state, refImput, handleChange, handleQuitTask, editTask, taskDone] =
    useTaskForm();

  return (
    <TaskContext.Provider value={{ handleQuitTask, editTask, taskDone }}>
      <InputText onChange={handleChange} refInput={refImput} />
      <ListTask state={state} />
    </TaskContext.Provider>
  );
};
