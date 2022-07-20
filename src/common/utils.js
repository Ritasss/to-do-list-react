import * as types from './common';

function addTask(taskName) {
    return {
        type: types.ADD_TASK,
        taskName
    }
}

function delTask(idx) {
    return {
        type: types.DELETE_TASK,
        idx
    }
}

function updateTaskState(idx,state) {
    return {
        type: types.CHANGE_TASK_STATE,
        idx,
        state
    }
}

function setFilter(filter){
    return {
        type: types.SET_FILTER,
        filter
    };
}

export {
    addTask,
    delTask,
    updateTaskState,
    setFilter
}