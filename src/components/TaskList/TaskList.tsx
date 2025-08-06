import { ITodo } from "../../@Types/todo";
import styles from "./tasklist.module.scss";

interface TaskList {
  done: boolean;
  taskList: ITodo[];
  handleDoneTodo: (id: string) => void;
  startEdit: (id: string) => void;
  deleteTodo: (id: string) => void
}

export const TaskList = (props: TaskList) => {
  const { done, taskList, handleDoneTodo, startEdit, deleteTodo} = props;

  return (
    <>
      <h2 className={`${styles.title}`}>
        {done ? "Hoàn Thành" : "Chưa Hoàn thành"}
      </h2>
      {taskList.map((item, index) => {
        return (
          <div key={index}>
            <div className={styles.taskList}>
              <div className={styles.taskItem}>
                <div className={styles.taskItemLeft}>
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className={styles.taskCheckbox}
                    checked={item.done}
                    onChange={() => handleDoneTodo(item.id)}
                  />
                  <span className={item.done ? `${styles.taskNameDone}` : ""}>
                    {item.name}
                  </span>
                </div>
                <div className={styles.actions}>
                  <button
                    className={styles.btn}
                    onClick={() => startEdit(item.id)}
                  >
                    🖊️
                  </button>
                  <button className={styles.btn} onClick={() => deleteTodo(item.id)}>🗑️</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
