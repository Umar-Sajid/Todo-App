const TaskFilter = (props) => {

    function toggleActive(e) {
        const options = document.querySelectorAll('.visibility-option')
        options.forEach((option) => option.classList.remove('active'))
        const buttonClicked = e.target
        buttonClicked.classList.add('active')
    }

    function showAll(e) {
        toggleActive(e)
        console.log("ShowAll")
        document.querySelectorAll('.task-item').forEach(el => el.classList.remove('hidden'))
    }

    function showActiveOnly(e) {
        toggleActive(e)
        console.log("ShowActive")
        document.querySelectorAll('.task-item').forEach(el => el.classList.remove('hidden'))
        document.querySelectorAll('.task-item.finished').forEach(el => el.classList.add('hidden'))
    }

    function showFinishedOnly(e) {
        toggleActive(e)
        console.log("ShowFinished")
        document.querySelectorAll('.task-item').forEach(el => el.classList.remove('hidden'))
        document.querySelectorAll('.task-item:not(.finished)').forEach(el => el.classList.add('hidden'))
    }

    return (
        <div className="filter-options">
            <button data-option-id="0" className="btn control-button visibility-option active" onClick={showAll}>All</button>
            <button data-option-id="1" className="btn control-button visibility-option" onClick={showActiveOnly}>Active</button>
            <button data-option-id="2" className="btn control-button visibility-option" onClick={showFinishedOnly}>Completed</button>
        </div>

    )
}

export default TaskFilter
