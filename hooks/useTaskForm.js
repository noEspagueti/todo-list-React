import { useEffect, useReducer, useRef } from "react";
import { taskReducer, init } from '../src/utils/getReducer';

export const useTaskForm = () => {
    const refImput = useRef(null);
    const [state, dispatch] = useReducer(taskReducer, [],init);

    const handleChange = (event) => {
        event.preventDefault();
        let data = new FormData(event.target);
        refImput.current = data.get('TaskInput');
        dispatch({ type: 'AddNewTask', addTask: refImput.current });
        event.target.children[0].value = "";
    };

    const handleQuitTask = (idTask) => {
        dispatch({ type: 'QuitTask', index: idTask });
    };

    useEffect(() => {
        localStorage.setItem('task',JSON.stringify(state));
    }, [state]);

    return [
        state,
        refImput,
        handleChange,
        handleQuitTask
    ];
};