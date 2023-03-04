import { InputText } from './components/';
import { ListTask } from './components/ListTask';
import { useTaskForm } from '../hooks/useTaskForm';

export const App = () => {

    const [state, refImput, handleChange, handleQuitTask] = useTaskForm();

    return (
        <>
            <InputText
                onChange={handleChange}
                refInput={refImput}
            />
            <ListTask
                state={state}
                removeTask={handleQuitTask} />
        </>
    );
};
