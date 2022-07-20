import { useDispatch } from "react-redux/es/hooks/useDispatch";
import React, { useState } from 'react';
import addIcon from "../../assets/add.png";
import './AddTasks.scss';
import {addTask} from "../../common/utils";

function AddTasks() {
    const dispatch = useDispatch();

    const [newTask, setNewTask] = useState();

    const addBtnOnclick = (event) => {
        if (newTask === "") return;
        dispatch(addTask(newTask));
        setNewTask("");
    }

    const taskInputOnChange = (event) => {
        setNewTask(event.target.value);
    }

    return (
      <div className="add-tasks-container">
        <input
          type="text"
          placeholder={"Add new task ..."}
          value={newTask}
          onChange={taskInputOnChange}
        />
        <button className="add-task-btn" onClick={()=> addBtnOnclick()}>
          <img src={addIcon} alt=""/>
        </button>
      </div>
    );
  }
  
  export default AddTasks;