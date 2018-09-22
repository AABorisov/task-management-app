/*
 *  Action types
 */
export const ADD_TASK = "ADD_TASK";
export const START_TASK = "START_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";
export const SELECT_TASK = "SELECT_TASK";
export const ADD_NOTE = "ADD_NOTE";


export function addTask(task) {
    return {
        type: ADD_TASK,
        payback: task
    }
}

export function startTask(taskId) {
    return {
        type: START_TASK,
        payback: taskId
    }
}

export function completeTask(taskId) {
    return {
        type: COMPLETE_TASK,
        payback: taskId
    }
}

export function selectTask(taskId) {
    return {
        type: SELECT_TASK,
        payback: taskId
    }
}

export function addNote(note) {
    return {
        type: ADD_NOTE,
        payback: note
    }
}