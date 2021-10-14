import Header from "../Components/Header"
import TaskList from "../Components/TaskList"
import TaskFilter from "../Components/TaskFilter"
import ShowSettingsPanel from "../Components/ShowSettingsPanel"
import { useRef, useState, useEffect } from "react"
import { v4 } from "uuid"
import useWindowSize from "../hooks/useWindowSize"

const Home = () => {

    const screenWidth = useWindowSize().width
    const localStorage = window.localStorage

    const startingTasks = [
        { id: v4(), title: "Complete online JavaScript course", isFinished: true },
        { id: v4(), title: "Jog around the park 3x", isFinished: false },
        { id: v4(), title: "10 minutes meditation", isFinished: false },
        { id: v4(), title: "Read for 1 hour", isFinished: false },
        { id: v4(), title: "Pick up groceries", isFinished: false },
        { id: v4(), title: "Complete Todo App on Frontend Mentor", isFinished: false }
    ]

    const inputEl = useRef()
    const [taskList, setTaskList] = useState(JSON.parse(localStorage.getItem('tasks')) ?? startingTasks)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskList))
    })

    function handleSubmit(e) {
        e.preventDefault()
        const inputVal = e.target[0].value
        const id = v4()
        const newTask = { id, title: inputVal, isFinished: false }
        setTaskList((prevTasks) => [...prevTasks, newTask])
        inputEl.current.value = ""
    }

    function deleteTask(taskId) {
        const i = taskList.findIndex(task => task.id === taskId)
        const newTasklist = Array.from(taskList)
        newTasklist.splice(i, 1)
        setTaskList(newTasklist)
    }

    function toggleTaskStatus(taskId) {
        console.log("toggleTaskStatus")
        const i = taskList.findIndex(task => task.id === taskId)
        console.log(i)
        setTaskList(taskList.map((task, index) => {
            if (index === i) {
                task.isFinished = !task.isFinished
            }
            return task
        }))
    }

    function updateLocalStorage() {
    }

    function clearFinished() {
        setTaskList(taskList.filter(item => item.isFinished === false))
    }

    function handleOnDragEnd(e) {
        console.log(e)
        if (e.destination === null) {
            return
        }
        const tasks = [...taskList]
        const [reorderedTask] = tasks.splice(e.source.index, 1)
        tasks.splice(e.destination.index, 0, reorderedTask)
        setTaskList(tasks)
    }

    function handleFocus() {
        document.querySelector('.decor-checkmark').classList.add('focused-input')
    }

    function handleBlur() {
        document.querySelector('.decor-checkmark').classList.remove('focused-input')
    }

    function forceFocus() {
        document.querySelector('input').focus()
    }


    return (
        <div className="app-wrapper">
            <Header />
            <form onSubmit={handleSubmit}>
                <div className="input-wrap" onClick={forceFocus}>
                    <span className="decor-checkmark" />
                    <input ref={inputEl} type="text" placeholder="Create a new todo" onFocus={handleFocus} onBlur={handleBlur} />
                </div>
            </form>
            <div className="tasklist-wrap">
                <TaskList handleOnDragEnd={handleOnDragEnd} taskList={taskList} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} />
                <ShowSettingsPanel screenWidth={screenWidth} taskList={taskList} clearFinished={clearFinished} />
            </div>
            {screenWidth < 480 && <TaskFilter />}
        </div>
    )
}

export default Home