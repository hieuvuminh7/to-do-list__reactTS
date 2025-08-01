import { useState } from "react";
import { TaskInput } from "../TaskInput/TaskInput";
import { TaskList } from "../TaskList/TaskList";
import styles from "./todolist.module.scss";
import { ITodos } from "../../@Types/todos";

export const TodoList = () => {
  const [todos, setTodos] = useState<ITodos[]>([]);

  const taskDone = todos.filter(item => item.done);
  const taskNotDone = todos.filter(item => !item.done);

  function addTodo (name: string) {
    const newTodo: ITodos = {
      name,
      done: false,
      id: new Date().toISOString() 
    }
    setTodos((prev) => [...prev, newTodo]);
  }

  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} />
        <TaskList done={false} todos={taskNotDone} />
        <TaskList done={true} todos={taskDone} />
      </div>
    </div>
  );
};
