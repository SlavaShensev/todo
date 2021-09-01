import React, {useState} from 'react';
import styled from 'styled-components';
import {log} from "util";

const TodoStyle = styled.div`
 
`;

export const Todo = (props) => {

    const {title, task, removeTask, changeFilter, addTask} = props;

    const [taskTitle, setTaskTitle] = useState("");

    const addTaskHandler = () => {
        addTask(taskTitle)
        setTaskTitle("")
    }

    return (
        <TodoStyle>
            <h1>{title}</h1>
            <div>
                <input value={taskTitle}
                       onChange={(e) =>
                           setTaskTitle(e.currentTarget.value)}
                       onKeyPress={(e) => {
                           if (e.charCode === 13) addTaskHandler()
                       }}
                />
                <button onClick={addTaskHandler}>
                    +
                </button>
            </div>
            <ul>
                {
                    task.map(t => <li key={t.id}>
                        <input type="checkbox"
                               checked={t.isDone}
                        />
                        <span>{t.title}</span>
                        <button onClick={() => {
                            removeTask(t.id)
                        }}>x
                        </button>
                    </li>)
                }
            </ul>
            <button onClick={() => changeFilter('all')}>
                All
            </button>
            <button onClick={() => changeFilter('active')}>
                Active
            </button>
            <button onClick={() => changeFilter('completed')}>
                Completed
            </button>
        </TodoStyle>

    )
}