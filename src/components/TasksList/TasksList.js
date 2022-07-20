import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import {setFilter} from '../../common/utils'

import './TasksList.scss';

import TaskListItem from '../TaskListItem/TaskListItem';

function TasksList() { 
    const dispatch = useDispatch();
    const tasks = useSelector((store)=> store.todosReducer);
    const filter = useSelector((store) => store.filterReducer);
    // console.log("🚀 ~ file: TasksList.js ~ line 9 ~ TasksList ~ tasks", tasks)
    const filterList = [
        {"name":'All',"id":"SHOW_ALL"},
        {"name":'Todo',"id":"SHOW_TODO"},
        {"name":'Done',"id":"SHOW_DONE"}
    ];

    const renderTaskList = () => {
        let resultList = [];
        tasks.forEach((taskItem, idx)=>{
            if ((filter === "SHOW_ALL") || (filter === "SHOW_TODO" && !taskItem.isCompleted) || (filter === "SHOW_DONE" && taskItem.isCompleted)){
                resultList.push(<TaskListItem key={idx} task={{...taskItem,index:idx}}></TaskListItem>);
            }
        })

        return resultList;
    }

    return (
        <div className="tasks-list-container">
            <div className="tasks-filter">
                {filterList.map((filterItem) => {
                    return (<button key={filterItem.id} className={`filter-btn ${(filter === filterItem.id)?'active':''}`} onClick={() => dispatch(setFilter(filterItem.id))}>{filterItem.name}</button>);
                })}
                {/* <button className={`filter-btn ${(filter === 'SHOW_ALL')?'active':''}`}>All</button>
                <button className='filter-btn'>Todo</button>
                <button className='filter-btn'>Done</button> */}
            </div>
            <div className="tasks-list">
                {renderTaskList()}
            </div>
        </div>
    );
}

export default TasksList;