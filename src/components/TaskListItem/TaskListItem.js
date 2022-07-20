
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {delTask,updateTaskState} from "../../common/utils";

import './TaskListItem.scss';

function TaskListItem(props) { 
    const dispatch = useDispatch();
    
    return (
        <div className="tasks-item-container">
            <input type="checkbox" checked={props.task.isCompleted} onChange={()=> dispatch(updateTaskState(props.task.index,!props.task.isCompleted))}/>
            <div className='item-name'>{props.task.taskName}</div>
            <button className='task-del-btn' onClick={()=> dispatch(delTask(props.task.index))}>Delete</button>
        </div>
    );
}

export default TaskListItem;