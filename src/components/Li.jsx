import { useContext, useState } from "react";
import { FiTrash2, FiEdit, FiCheckCircle, FiCheck } from "react-icons/fi";
import { TaskContext } from "./context/taskContext";
import { InputEdit } from "./InputEdit";

export const Li = ({ item }) => {
  
  const [show, setShow] = useState(false);
  const [task, setTask] = useState(item.task);

  const getAction = useContext(TaskContext);

  return (
    <li className="bg-indigo-500 text-cyan-50 px-5 py-5">
      <section className="flex items-center w-14">
        <a href="#" className="hover:text-indigo-700">
          <FiCheckCircle />
        </a>
      </section>

      <section className="block justify-start text-task">
        <p className="text-sm">
          <i>title</i>
        </p>
        {(show && <InputEdit task={task} changeTask={setTask} />) || (
          <p className="text-2xl">{item.task}</p>
        )}
      </section>

      <section className="grid gap-y-5 w-5">
        {(show && (
          <a
            href="#"
            className="hover:text-green-400"
            onClick={() => getAction.editTask(item.id, task, setShow)}

          >
            <FiCheck/>
          </a>
        )) || (
          <a
            href="#"
            className="hover:text-indigo-400"
            onClick={() => {
              setShow(!show);
            }}
          >
            <FiEdit />
          </a>
        )}
        <a
          href="#"
          className="hover:text-red-500 fade"
          onClick={() => getAction.handleQuitTask(item.id)}
        >
          <FiTrash2 />
        </a>
      </section>
    </li>
  );
};
