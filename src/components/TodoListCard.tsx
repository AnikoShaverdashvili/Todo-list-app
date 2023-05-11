import styles from "./TodoListCard.module.css";
import { useState, ChangeEvent } from "react";
import { ITask } from "../Interfaces";
import TodoListItem from "./TodoListItem";
const TodoListCard = () => {
  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<ITask[]>([]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      const value = event.target.value.trim();
      setDeadline(value === "" ? 0 : Number(value));
    }
  };

  const handleClick = () => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
    console.log(todoList);
  };

  const handleDelete = (taskNameToDelete: string) => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {" "}
        <div></div>
        <input
          type="text"
          name="task"
          value={task}
          placeholder="Task..."
          onChange={handleChange}
        />
        <input
          type="number"
          value={deadline}
          name="deadline"
          placeholder="Deadline(in Days)..."
          onChange={handleChange}
        />
        <button className={styles.Submitbutton} onClick={handleClick}>
          Add Task
        </button>
        <img
          className={styles.image}
          src="https://static.vecteezy.com/system/resources/previews/018/870/252/original/aesthetic-flower-illustration-free-png.png"
          alt="Aesthetic Flower"
        />
      </div>

      <div className={styles.taskContainer}>
        {todoList.map((task: ITask, key: number) => {
          return (
            <TodoListItem key={key} task={task} handleDelete={handleDelete} />
          );
        })}
      </div>
    </div>
  );
};

export default TodoListCard;
