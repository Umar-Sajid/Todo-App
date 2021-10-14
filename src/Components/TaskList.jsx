import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskItem from "./TaskItem"

const TaskList = (props) => {
    const handleOnDragEnd = props.handleOnDragEnd

    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="taskList">
                {(provided) => (
                    <div className="tasklist" {...provided.droppableProps} ref={provided.innerRef}>
                        {props.taskList.map((task, index) => <Draggable key={task.id} draggableId={task.id} index={index}>{(provided) => <TaskItem provided={provided} task={task} toggleTaskStatus={props.toggleTaskStatus} deleteTask={props.deleteTask} />}</Draggable>)}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default TaskList
