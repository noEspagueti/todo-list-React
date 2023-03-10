import { useEffect, useReducer, useRef } from "react";
import { taskReducer, init } from '../src/utils/getReducer';

export const useTaskForm = () => {
    const refImput = useRef(null);
    const [state, dispatch] = useReducer(taskReducer, [], init);

    const handleChange = (event) => {
        event.preventDefault();
        let data = new FormData(event.target);
        refImput.current = data.get('TaskInput');
        if (!refImput.current) return;
        dispatch({ type: 'AddNewTask', addTask: refImput.current });
        document.getElementById("taskInput").value= ""
    };

    const handleQuitTask = (idTask) => {
        dispatch({ type: 'QuitTask', index: idTask });
    };


    const editTask = (idEdit, task, show) => {
        dispatch({ type: "EditTask", id: idEdit, newTask: task });
        show(false);
    }

    const taskDone = (idDone) => {
        dispatch({ type: "TaskDone", id: idDone });
    }


    useEffect(() => {
        localStorage.setItem('task', JSON.stringify(state));
    }, [state]);

    return [
        state,
        refImput,
        handleChange,
        handleQuitTask,
        editTask,
        taskDone
    ];
};