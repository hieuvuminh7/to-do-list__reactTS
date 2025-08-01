import { ITodos } from "../../@Types/todos";
import styles from "./tasklist.module.scss";

interface TodosProps {
  done: boolean;
  todos: ITodos[]; 
}

export const TaskList = (props: TodosProps) => {
  const { todos } = props;
  return (
    <>
      <h2 className={styles.title}>
        {props.done ? "Hoàn thành" : "Chưa hoàn thành"}
      </h2>
      <div className={styles.taskList}>
        {todos.map((item) => {
          return (
            <>
              {/* Item */}
              <div className={styles.taskItem} key={item.id}>
                <div className={styles.left}>
                  <input type="checkbox" name="" id="" checked={item.done} />
                  <span className={`${styles.taskItem} ${item.done ? styles.taskItemDone: ''}`}>{item.name}</span>
                </div>
                <div className={styles.btnActions}>
                  <button className={styles.btn}>🖊️</button>
                  <button className={styles.btn}>🗑️</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
