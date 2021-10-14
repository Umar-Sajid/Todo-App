import { useState, useEffect } from "react"

const TaskItem = (props) => {
    const task = props.task
    const deleteTask = props.deleteTask
    const toggleTaskStatus = props.toggleTaskStatus
    const provided = props.provided

    let [isTaskFinished, setIsTaskFinished] = useState(props.task.isFinished)
    let [spanClasses, setSpanClasses] = useState(`is-${task.id}-finished checkmark`)

    function handleChange(e) {
        e.preventDefault()
        if (e.target.matches('.delete-task-btn')) {
            return
        }
        setIsTaskFinished(!isTaskFinished)
        document.querySelector(`label[for="is-${task.id}-finished"]`).classList.toggle('finished-task')
        document.querySelector(`label[for="is-${task.id}-finished"]`).parentNode.classList.toggle('finished')
        document.querySelector(`.${`is-${task.id}-finished`}`).classList.toggle('checked')
        toggleTaskStatus(task.id)
    }

    function handleClick(e) {
        e.preventDefault()
        console.log(e)
        deleteTask(task.id)
    }

    useEffect(() => {
        if (task.isFinished) {
            setSpanClasses(`is-${task.id}-finished checkmark checked`)
            document.querySelector(`label[for="is-${task.id}-finished"]`).classList.toggle('finished-task')
            document.querySelector(`label[for="is-${task.id}-finished"]`).parentNode.classList.toggle('finished')
        }
    }, [])

    return (
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="task-item" id={task.id} onClick={handleChange}>
            <input type="checkbox" id={`is-${task.id}-finished`} checked={task.isFinished} onChange={handleChange} />
            <span className={spanClasses} />
            <label className={`is-${task.id}-finished task-label`} htmlFor={`is-${task.id}-finished`}>{task.title}</label>
            <button className="btn delete-task-btn" onClick={handleClick} />
        </div>
    )
}

export default TaskItem
