import TaskFilter from "./TaskFilter"

const ShowSettingsPanel = (props) => {

    const activeTasks = props.taskList.filter(item => item.isFinished === false)
    const clearFinished = props.clearFinished

    let screenWidth = window.screen.width
    console.log(screenWidth)

    if (screenWidth > 480) {
        return (
            <div className="settings-panel">
                <div className="settings-wrap">
                    <span className="task-counter">{activeTasks.length} items left</span>
                    {props.screenWidth >= 480 && <TaskFilter/>}
                    <button className="btn control-button clear-button" onClick={clearFinished}>Clear Completed</button>
                </div>
            </div>
        )
    } else {
        return (
            <>
                <div className="settings-panel">
                    <div className="settings-wrap">
                        <span className="task-counter">{activeTasks.length} items left</span>
                        <button className="btn control-button clear-button" onClick={clearFinished}>Clear Completed</button>
                    </div>
                </div>
            </>
        )
    }


}

export default ShowSettingsPanel