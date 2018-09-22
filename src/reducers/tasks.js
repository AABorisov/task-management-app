import {ADD_TASK, START_TASK, COMPLETE_TASK, SELECT_TASK, ADD_NOTE} from '../actions';

const defaultTask = {
    id : 0,
    title : "Default",
    notes : [],
    started : false,
    completed : false,
    timeCreated : null,
    timeStarted : null,
    timeCompleted : null,
    timeWorking : null
};

let counterId = 0;
const initialState = {
    tasks: [
        Object.assign({}, defaultTask, {
            id:  counterId++,
            title: "Default 1",
            notes: ["note 1"],
            timeCreated: new Date()
        }),
        Object.assign({}, defaultTask, {
            id:  counterId++,
            title: "Default 2",
            notes: ["note 1", "note 2"],
            timeCreated: new Date()
        }),
    ],
    selectedTask: null
};


export default  function (state = initialState, action) {
    switch (action.type) {
        case ADD_TASK:
            return Object.assign({}, state, {
                tasks: [
                    ...state.tasks,
                    Object.assign({}, defaultTask, action.payback, {
                        id: counterId ++
                    })
                ]
            });

        case START_TASK:
            return Object.assign({}, state, {
                tasks: state.tasks.map(task => {
                    return task.id === action.payback ? {
                        ...task,
                        started: true,
                        timeStarted: new Date()
                    } : task;
                })
            });

        case COMPLETE_TASK:
            let dateCompleted = new Date();
            return Object.assign({}, state, {
                tasks: state.tasks.map(task => {
                    return task.id === action.payback ? {
                        ...task,
                        completed: true,
                        timeCompleted: dateCompleted,
                        timeWorking: Math.round((dateCompleted - task.timeStarted)/1000)
                    } : task;
                })
            });

        case SELECT_TASK:
            return Object.assign({}, state, {
                selectedTask: action.payback
            });

        case ADD_NOTE:
            return Object.assign({}, state, {
                tasks: state.tasks.map(task => {
                    return task.id === state.selectedTask ? {
                        ...task,
                        notes: [...task.notes, action.payback]
                    } : task;
                })
            });

        default:
            return state;
    }
};