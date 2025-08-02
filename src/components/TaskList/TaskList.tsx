import { ITodo } from "../../@Types/todo";
import styles from "./tasklist.module.scss";

interface TaskList {
  done: boolean;
  taskList: ITodo[];
  handleDoneTodo: (id: string, done: boolean) => void;
}

export const TaskList = (props: TaskList) => {
  const { done, taskList, handleDoneTodo } = props;

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
                    onChange={(e) => handleDoneTodo(item.id, e.target.checked)}
                  />
                  <span className={item.done ? `${styles.taskNameDone}` : ""}>
                    {item.name}
                  </span>
                </div>
                <div className={styles.actions}>
                  <button className={styles.btn}>🖊️</button>
                  <button className={styles.btn}>🗑️</button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
