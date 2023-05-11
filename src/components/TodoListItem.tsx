import React from "react";
import styles from "./TodoListCard.module.css";
import { ITask } from "../Interfaces";

interface Props {
  task: ITask;
  handleDelete(taskNameToDelete: string): void;
}

const TodoListItem = ({ task, handleDelete }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid white",
        marginBottom: "10px",
        padding: "5px",
        backgroundColor: "lavenderblush",
        borderRadius: "5px",
      }}>
      <div style={{ maxWidth: "10px" }}>{task.taskName}</div>
      <div>{task.deadline}</div>
      <button
        className={styles.DeleteButton}
        onClick={() => handleDelete(task.taskName)}>
        X
      </button>
    </div>
  );
};

export default TodoListItem;
