import React, {useState} from "react";
import {Todo} from "./Todo/Todo";
import {v1} from "uuid";

export const App = () => {

    const [tasks, setTasks] = useState([
        {id: v1(), title: "HTML&CSS", isDone: false},
        {id: v1(), title: "JS", isDone: false},
        {id: v1(), title: "React JS", isDone: true},
        {id: v1(), title: "Books", isDone: false},
        {id: v1(), title: "New films", isDone: true},
    ])

    const [filter, setFilter] = useState('all')

    let taskForTodoList = tasks;

    if (filter === 'active') {
        taskForTodoList = tasks.filter(t => t.isDone === false)
    }

    if (filter === 'completed') {
        taskForTodoList = tasks.filter(t => t.isDone === true)
    }

    function removeTask(id) {
        let filteredTasks = tasks.filter(t => t.id !== id);
        setTasks(filteredTasks)
    }

    function changeFilter(filter) {
        setFilter(filter)
    }

    function addTask(taskTitle) {
        const task = {
            id: v1(),
            title: taskTitle,
            isDone: false,
        }
        const newTask = [task, ...tasks]
        setTasks(newTask);
    }

    return (
        <Todo title="What to learn"
              task={taskForTodoList}
              removeTask={removeTask}
              changeFilter={changeFilter}
              addTask={addTask}
        />
    )
}
