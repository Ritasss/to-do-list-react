
import * as types from '../common/common';

const initialTasks = [
    {
        taskName:"task1",
        isCompleted: false
    },
    {
        taskName:"task2",
        isCompleted: true
    },
    {
        taskName:"task3",
        isCompleted: false
    }
];


export default function todos(state = initialTasks, action) {
    switch (action.type) {
      case types.ADD_TASK:
        return [
            ...state,
            {
                taskName: action.taskName,
                isCompleted: false
            }
        ];
      case types.DELETE_TASK:
        return [
            ...state.slice(0, action.idx),
            ...state.slice(action.idx + 1)
        ];
      case types.CHANGE_TASK_STATE:
        let newState = [...state];
        newState[action.idx].isCompleted = action.state;
        return newState;
      default:
        return state;
    }
  }