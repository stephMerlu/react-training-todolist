import { Task } from "./Task";
import { TaskType } from '../model/Task';
import "./TasksList.css";

type TaskListProps ={
    tasks : TaskType[]
    deleteTask : (taskId: number) => void
    editTask : (taskId: number) => void
    updateTaskState : (tasId: number) => void
}

type TaskProps = {
    task : TaskType,
  };
  

export const TaskList = ({tasks, deleteTask, editTask, updateTaskState}: TaskListProps) => {
    return (
        <>
            {
                tasks.map((task: TaskType) => <Task deleteTask={deleteTask} key={task.id} task={task} editTask={editTask} updateTaskState={updateTaskState}/>)
            }
        </>
    );
};