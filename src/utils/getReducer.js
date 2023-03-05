const taskReducer = (state, action) => {
    switch (action.type) {
        case 'AddNewTask':
            return [
                ...state,
                {
                    id: state.length && state[state.length - 1].id + 1 || 1,
                    task: action.addTask,
                    done: false
                }
            ];
            break;

        case 'QuitTask':
            return state.filter(item => item.id !== action.index);
            break;

        case "EditTask":
            return state.map(item => {
                if (item.id === action.id) {
                    item.task = action.newTask;
                }
                return item;
            });
            break;

        case "TaskDone":
            return state.map(item => {
                if (item.id === action.id) {
                    item.done = !item.done;
                }
                return item;
            })
        default:
            return [];

    };
};


const init = () => {
    return JSON.parse(localStorage.getItem('task')) || [];
}


export {
    taskReducer,
    init
}